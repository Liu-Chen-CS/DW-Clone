package com.liuchen.iubhback.service.impl;

import com.liuchen.iubhback.modal.dto.AuthorInfo;
import com.liuchen.iubhback.modal.dto.FormDto;
import com.liuchen.iubhback.modal.dto.NewsInfo;
import com.liuchen.iubhback.modal.entity.*;
import com.liuchen.iubhback.repository.*;
import com.liuchen.iubhback.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private NewsRepository newsRepository;

    @Autowired
    private MediasRepository mediasRepository;

    @Autowired
    private RegionRepository regionRepository;

    @Override
    public void saveAuthor(FormDto formDto) {

        AuthorInfo authorInfo = formDto.getAuthorInfo();
        Author author = new Author();

        author.setGender(authorInfo.getGender());
        author.setName(authorInfo.getName());
        author.setAge(Integer.valueOf(authorInfo.getAge()));
        author.setPostcode(authorInfo.getPostcode());
        author.setAddress(authorInfo.getAddress());

        String countryId = authorInfo.getCountry().getId();
        Country countryById = countryRepository.findById(Integer.valueOf(countryId)).orElseThrow(() -> new RuntimeException("Country not found"));
        author.setCountry(countryById);

        String regionId = authorInfo.getRegion().getId();
        Region regionById = regionRepository.findById(Integer.valueOf(regionId)).orElseThrow(() -> new RuntimeException("Region not found"));
        author.setRegion(regionById);

        String cityId = authorInfo.getCity().getId();
        City cityById = cityRepository.findById(Integer.valueOf(cityId)).orElseThrow(() -> new RuntimeException("City not found"));
        author.setCity(cityById);

        authorRepository.save(author);

        NewsInfo newsInfo = formDto.getNewsInfo();
        News news = new News();
        news.setTitle(newsInfo.getTitle());
        news.setContent(newsInfo.getContent());
        news.setType(newsInfo.getType());
        news.setLocalDateTime(LocalDateTime.now());
        news.setAuthor(author);
        newsRepository.save(news);


        Medias medias = new Medias();
        com.liuchen.iubhback.modal.dto.Medias medias1 = formDto.getMedias();
        medias.setVideoLink(medias1.getVideoLink());
        medias.setImageLink(medias1.getImageLink());
        medias.setNews(news);
        mediasRepository.save(medias);




    }

}
