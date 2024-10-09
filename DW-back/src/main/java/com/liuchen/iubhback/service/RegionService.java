package com.liuchen.iubhback.service;

import com.liuchen.iubhback.modal.vo.antdOption.AntdOptions;

public interface RegionService {

    AntdOptions getRegionsByCountryId(Integer countryId);

}
