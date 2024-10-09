package com.liuchen.iubhback.modal.vo.other;


import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class NewsListInfo {

    private Integer newsId;

    private String title;

    private String author;

    private String type;

    private LocalDateTime createdOn;

    public NewsListInfo(String title, String author, String type, LocalDateTime createdOn, Integer newsId) {
        this.newsId = newsId;
        this.title = title;
        this.author = author;
        this.type = type;
        this.createdOn = createdOn;
    }

}
