package com.liuchen.iubhback.modal.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class NewsInfo {

    @NotNull(message = "title cannot be null")
    private String title;

    @NotNull(message = "content cannot be null")
    private String content;

    @NotNull(message = "type cannot be null")
    private String type;

}
