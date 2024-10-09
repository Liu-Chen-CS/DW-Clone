package com.liuchen.iubhback.controller;


import com.liuchen.iubhback.modal.dto.FormDto;
import com.liuchen.iubhback.service.AuthorService;
import com.liuchen.iubhback.service.impl.NewsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/form")
@CrossOrigin(origins = "http://localhost:5173")
public class FormController {

    @Autowired
    private AuthorService authorServiceImpl;
    @Autowired
    private NewsServiceImpl newsServiceImpl;

    @PostMapping("/save")
    public void save(@RequestBody @Validated FormDto formDto) {
        authorServiceImpl.saveAuthor(formDto);
    }

    @PostMapping("/update/{newsId}")
    public void update(@PathVariable(name="newsId") Integer newsId, @RequestBody FormDto formDto){
        newsServiceImpl.updateNewsById(newsId, formDto);
    }

}
