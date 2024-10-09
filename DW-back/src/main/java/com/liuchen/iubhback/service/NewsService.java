package com.liuchen.iubhback.service;

import com.liuchen.iubhback.modal.dto.FormDto;
import com.liuchen.iubhback.modal.dto.NewsMediaDto;
import com.liuchen.iubhback.modal.entity.News;
import com.liuchen.iubhback.modal.vo.other.NewsListInfo;

import java.util.List;

public interface NewsService {

    List<NewsMediaDto> getNewsMediaForPoliticalNews();

    List<NewsMediaDto> findNewsMediaByTypeSports();

    List<NewsMediaDto> findNewsMediaByTypeBreaking();

    List<NewsListInfo> findNewsMediaByTypeAll();

    void deleteNewsById(Integer deleteId);

    FormDto findNewsById(Integer newsId);

    void updateNewsById(Integer newsId, FormDto formDto);
}
