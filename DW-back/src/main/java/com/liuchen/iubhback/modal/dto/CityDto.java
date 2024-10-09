package com.liuchen.iubhback.modal.dto;
import lombok.Data;
import java.util.List;

@Data
public class CityDto {

    private String cityName;

    private List<String> postcodes;

}
