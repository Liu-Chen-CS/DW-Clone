package com.liuchen.iubhback.controller;

import com.liuchen.iubhback.modal.dto.FormDto;
import com.liuchen.iubhback.modal.dto.NewsMediaDto;
import com.liuchen.iubhback.modal.vo.other.NewsListInfo;
import com.liuchen.iubhback.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/news")
@CrossOrigin(origins = "http://localhost:5173")
public class NewsController {

    @Autowired
    private NewsService newsServiceImpl;

    @GetMapping("/politics")
    public List<NewsMediaDto> getPoliticalNewsMedia() {
        return newsServiceImpl.getNewsMediaForPoliticalNews();
    }

    @GetMapping("/sports")
    public List<NewsMediaDto> findNewsMediaByTypeSports() {
        return newsServiceImpl.findNewsMediaByTypeSports();
    }

    @GetMapping("/breaking")
    public List<NewsMediaDto> findNewsMediaByTypeBreaking() {
        return newsServiceImpl.findNewsMediaByTypeBreaking();
    }

    @GetMapping("/all")
    public List<NewsListInfo> findNewsMediaByTypeAll() {
       return newsServiceImpl.findNewsMediaByTypeAll();
    }

    @DeleteMapping("/{deleteId}")
    public void deleteNewsById(@PathVariable(name = "deleteId") Integer deleteId) {
        newsServiceImpl.deleteNewsById(deleteId);
    }

    @GetMapping("/{newsId}")
    public FormDto findNewsById(@PathVariable(name = "newsId") Integer newsId) {
        return newsServiceImpl.findNewsById(newsId);
    }

}
