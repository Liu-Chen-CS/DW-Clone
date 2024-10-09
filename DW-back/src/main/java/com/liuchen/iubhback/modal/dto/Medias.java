package com.liuchen.iubhback.modal.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class Medias {

    @NotNull(message = "videoLink cannot be null")
    private String videoLink;

    @NotNull(message = "imageLink cannot be null")
    private String imageLink;

}
