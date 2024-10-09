package com.liuchen.iubhback.service.impl;

import com.liuchen.iubhback.modal.entity.Region;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOption;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOptions;
import com.liuchen.iubhback.repository.CountryRepository;
import com.liuchen.iubhback.repository.RegionRepository;
import com.liuchen.iubhback.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RegionServiceImpl implements RegionService {

    @Autowired
    RegionRepository regionRepository;

    @Autowired
    CountryRepository countryRepository;

    @Override
    @Cacheable(cacheNames = "getRegionsByCountryId")
    public AntdOptions getRegionsByCountryId(Integer countryId) {
        List<Region> byCountryCountryId = regionRepository.findByCountry_CountryId(countryId);
        AntdOptions regionListVo = new AntdOptions();
        List<AntdOption> antdOptionList = new ArrayList<>();

        for (Region region : byCountryCountryId) {
            AntdOption antdOption = new AntdOption();
            antdOption.setId(region.getRegionId());
            antdOption.setValue(region.getRegionName());
            antdOption.setLabel(region.getRegionName());
            antdOptionList.add(antdOption);
        }

        regionListVo.setOptionList(antdOptionList);
        return regionListVo;
    }

}
