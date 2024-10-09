package com.liuchen.iubhback.modal.dto;
import com.liuchen.iubhback.modal.entity.Region;
import jakarta.annotation.Nullable;
import lombok.Data;

import java.util.List;

@Data
public class CountryDto {

    private String countryName;

    private List<RegionDto> regions;

}
