package com.liuchen.iubhback.controller;
import com.liuchen.iubhback.modal.dto.CountryDto;
import com.liuchen.iubhback.modal.vo.antdOption.AntdOptions;
import com.liuchen.iubhback.service.CountryService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/author")
@CrossOrigin(origins = "http://localhost:5173")
public class CountryController {

    @Autowired
    private CountryService countryServiceImpl;

    @GetMapping("/country")
    public ResponseEntity<AntdOptions> getCountry() {
        return ResponseEntity.ok(countryServiceImpl.getAllCountries());
    }

    @PostMapping("/country")
    @Transactional
    public void saveCountry(@RequestBody CountryDto countryDto){
        countryServiceImpl.saveCountry(countryDto);
    }

}
