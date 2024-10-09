package com.liuchen.iubhback.service.impl;

import com.liuchen.iubhback.modal.dto.*;
import com.liuchen.iubhback.modal.entity.Author;
import com.liuchen.iubhback.modal.entity.News;
import com.liuchen.iubhback.modal.vo.other.NewsListInfo;
import com.liuchen.iubhback.repository.MediasRepository;
import com.liuchen.iubhback.repository.NewsRepository;
import com.liuchen.iubhback.service.AuthorService;
import com.liuchen.iubhback.service.NewsService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private MediasRepository mediasRepository;

    @Override
    public List<NewsMediaDto> getNewsMediaForPoliticalNews() {
        return newsRepository.findNewsMediaByTypePolitical();
    }

    @Override
    public List<NewsMediaDto> findNewsMediaByTypeSports() {
        return newsRepository.findNewsMediaByTypeSports();
    }

    @Override
    public List<NewsMediaDto> findNewsMediaByTypeBreaking() {
        for(NewsMediaDto newsMediaDto : newsRepository.findNewsMediaByTypeBreaking()){
            System.out.println(newsMediaDto.getTitle());
        }
        return newsRepository.findNewsMediaByTypeBreaking();
    }

    @Override
    public List<NewsListInfo> findNewsMediaByTypeAll() {
        return newsRepository.findNewsMediaByTypeAll();
    }

    @Transactional
    @Override
    public void deleteNewsById(Integer deleteId) {
        mediasRepository.deleteMediasByNewsId(deleteId);
        newsRepository.deleteNewsById(deleteId);
    }

    @Override
    public FormDto findNewsById(Integer newsId) {
        News newsById = newsRepository.findNewsById(newsId);
        FormDto formDto = new FormDto();
        formDto.setMode("edit");

        Author author = newsById.getAuthor();
        AuthorInfo authorInfo = new AuthorInfo();
        authorInfo.setGender(author.getGender());
        authorInfo.setName(author.getName());
        authorInfo.setAge(String.valueOf(author.getAge()));
        authorInfo.setPostcode(author.getPostcode());
        authorInfo.setAddress(author.getAddress());
        com.liuchen.iubhback.modal.entity.Country country1 = author.getCountry();
        Country country = new Country();
        country.setId(country1.getCountryId().toString());
        country.setName(country1.getCountryName());
        authorInfo.setCountry(country);

        Region region = new Region();
        com.liuchen.iubhback.modal.entity.Region region1 = author.getRegion();
        region.setId(region1.getRegionId().toString());
        region.setName(region1.getRegionName());
        authorInfo.setRegion(region);

        City city = new City();
        com.liuchen.iubhback.modal.entity.City city1 = author.getCity();
        city.setId(city1.getCityId().toString());
        city.setName(city1.getCityName());
        authorInfo.setCity(city);

        formDto.setAuthorInfo(authorInfo);

        NewsInfo newsInfo = new NewsInfo();
        newsInfo.setTitle(newsById.getTitle());
        newsInfo.setContent(newsById.getContent());
        newsInfo.setType(newsById.getType());
        formDto.setNewsInfo(newsInfo);


        Medias medias1 = new Medias();
        com.liuchen.iubhback.modal.entity.Medias medias = newsById.getMediaList().get(0);
        medias1.setVideoLink(medias.getVideoLink());
        medias1.setImageLink(medias.getImageLink());
        formDto.setMedias(medias1);

        return formDto;
    }

    @Override
    public void updateNewsById(Integer newsId, FormDto formDto) {

        News newsById = newsRepository.findNewsById(newsId);

        if(newsById != null){

            NewsInfo newsInfo = formDto.getNewsInfo();

            newsById.setTitle(newsInfo.getTitle());
            newsById.setContent(newsInfo.getContent());
            newsById.setType(newsInfo.getType());
            newsById.setLocalDateTime(LocalDateTime.now());

            Author author = newsById.getAuthor();
            AuthorInfo authorInfo = formDto.getAuthorInfo();
            author.setGender(authorInfo.getGender());
            author.setName(authorInfo.getName());
            author.setAge(Integer.valueOf(authorInfo.getAge()));
            author.setPostcode(authorInfo.getPostcode());
            author.setAddress(authorInfo.getAddress());

            com.liuchen.iubhback.modal.entity.Country country = author.getCountry();
            Country country1 = authorInfo.getCountry();
            country.setCountryId(Integer.valueOf(country1.getId()));
            country.setCountryName(country1.getName());

            com.liuchen.iubhback.modal.entity.Region region = author.getRegion();
            Region region1 = authorInfo.getRegion();
            region.setRegionId(Integer.valueOf(region1.getId()));
            region.setRegionName(region1.getName());

            com.liuchen.iubhback.modal.entity.City city = author.getCity();
            City city1 = authorInfo.getCity();
            city.setCityId(Integer.valueOf(city1.getId()));
            city.setCityName(city1.getName());

            com.liuchen.iubhback.modal.entity.Medias medias = newsById.getMediaList().get(0);
            Medias medias1 = formDto.getMedias();
            medias1.setVideoLink(medias1.getVideoLink());
            medias1.setImageLink(medias1.getImageLink());

            newsRepository.save(newsById);

        }
        else{
            throw new RuntimeException("No such news being found");
        }
    }

}
