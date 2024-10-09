package com.liuchen.iubhback.modal.dto;
import lombok.Data;

import java.util.List;

@Data
public class RegionDto {

    private String regionName;

    private List<CityDto> cities;

}
