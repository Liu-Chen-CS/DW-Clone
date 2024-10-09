package com.liuchen.iubhback.service;

import com.liuchen.iubhback.modal.dto.CountryDto;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOptions;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOption;

public interface CountryService {

    void saveCountry(CountryDto countryDto);

    AntdOptions getAllCountries();
}
