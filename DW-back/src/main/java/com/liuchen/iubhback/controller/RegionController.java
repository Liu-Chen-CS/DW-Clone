package com.liuchen.iubhback.controller;

import com.liuchen.iubhback.modal.vo.antdOption.AntdOptions;
import com.liuchen.iubhback.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/author")
@CrossOrigin(origins = "http://localhost:5173")
public class RegionController {

    @Autowired
    private RegionService regionServiceImpl;

    @GetMapping("/region/{countryId}")
    public ResponseEntity<AntdOptions> getRegionByCountryId(@PathVariable(name="countryId") Integer countryId) {
        AntdOptions regionsByCountryId = regionServiceImpl.getRegionsByCountryId(countryId);
        return ResponseEntity.ok(regionsByCountryId);
    }

}
