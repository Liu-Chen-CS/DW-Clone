package com.liuchen.iubhback.modal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class NewsMediaDto {

    private String imageLink;

    private String title;

    private String content;

    private LocalDateTime localDateTime;

    public NewsMediaDto(String imageLink, String title, String content, LocalDateTime localDateTime) {
        this.imageLink = imageLink;
        this.title = title;
        this.content = content;
        this.localDateTime = localDateTime;
    }

}
