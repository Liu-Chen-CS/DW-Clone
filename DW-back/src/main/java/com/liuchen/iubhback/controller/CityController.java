package com.liuchen.iubhback.controller;

import com.liuchen.iubhback.modal.vo.antdOption.AntdOptions;
import com.liuchen.iubhback.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/author")
@CrossOrigin(origins = "http://localhost:5173")
public class CityController {

    @Autowired
    private CityService cityServiceImpl;

    @GetMapping("/country/region/city/{regionId}")
    public ResponseEntity<AntdOptions> getCitiesByRegionId(@PathVariable(name = "regionId") Integer regionId) {
        AntdOptions citiesByRegionId = cityServiceImpl.getCitiesByRegionId(regionId);
        return ResponseEntity.ok(citiesByRegionId);
    }

}
