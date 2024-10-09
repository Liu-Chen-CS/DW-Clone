package com.liuchen.iubhback.service.impl;

import com.liuchen.iubhback.modal.entity.City;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOption;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOptions;
import com.liuchen.iubhback.repository.CityRepository;
import com.liuchen.iubhback.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    CityRepository cityRepository;

    @Override
    @Cacheable(cacheNames = "getCitiesByRegionId")
    public AntdOptions getCitiesByRegionId(Integer regionId) {
        List<City> byRegionRegionId = cityRepository.findByRegion_RegionId(regionId);
        AntdOptions antdOptions = new AntdOptions();
        List<AntdOption> antdOptionList = new ArrayList<>();

        for (City city : byRegionRegionId) {
            AntdOption antdOption = new AntdOption();
            antdOption.setId(city.getCityId());
            antdOption.setValue(city.getCityName());
            antdOption.setLabel(city.getCityName());
            antdOptionList.add(antdOption);
        }
        antdOptions.setOptionList(antdOptionList);
        return antdOptions;
    }

}
