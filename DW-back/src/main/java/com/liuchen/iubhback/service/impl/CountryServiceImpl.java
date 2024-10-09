package com.liuchen.iubhback.service.impl;

import com.liuchen.iubhback.modal.dto.CityDto;
import com.liuchen.iubhback.modal.dto.CountryDto;
import com.liuchen.iubhback.modal.dto.RegionDto;
import com.liuchen.iubhback.modal.entity.City;
import com.liuchen.iubhback.modal.entity.Country;
import com.liuchen.iubhback.modal.entity.Postcode;
import com.liuchen.iubhback.modal.entity.Region;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOptions;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOption;
import com.liuchen.iubhback.repository.CityRepository;
import com.liuchen.iubhback.repository.CountryRepository;
import com.liuchen.iubhback.repository.PostcodeRepository;
import com.liuchen.iubhback.repository.RegionRepository;
import com.liuchen.iubhback.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private PostcodeRepository postcodeRepository;

    @Override
    public void saveCountry(CountryDto countryDto) {
        Country country = new Country();
        country.setCountryName(countryDto.getCountryName());
        countryRepository.save(country);

        for (RegionDto regionDto : countryDto.getRegions()) {
            Region region = new Region();
            region.setRegionName(regionDto.getRegionName());
            region.setCountry(country);
            regionRepository.save(region);

            // Save Cities
            for (CityDto cityDto : regionDto.getCities()) {
                City city = new City();
                city.setCityName(cityDto.getCityName());
                city.setRegion(region);
                cityRepository.save(city);

                // Save Postcodes
                for (String postcode : cityDto.getPostcodes()) {
                    Postcode postCodeEntity = new Postcode();
                    postCodeEntity.setPostcode(postcode);
                    postCodeEntity.setCity(city);
                    postcodeRepository.save(postCodeEntity);
                }
            }
        }
    }

    @Override
    public AntdOptions getAllCountries() {
        List<Country> countries = countryRepository.findAll();
        AntdOptions countryListVo = new AntdOptions();
        List<AntdOption> antdOptions = new ArrayList<>();

        for(Country country : countries){
            AntdOption antdOption = new AntdOption();
            antdOption.setId(country.getCountryId());
            antdOption.setValue(country.getCountryName());
            antdOption.setLabel(country.getCountryName());
            antdOptions.add(antdOption);
        }

        countryListVo.setOptionList(antdOptions);
        return countryListVo;
    }

}
