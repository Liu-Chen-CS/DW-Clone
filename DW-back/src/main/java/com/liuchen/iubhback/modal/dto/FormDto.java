package com.liuchen.iubhback.modal.dto;
import jakarta.validation.Valid;
import lombok.Data;

@Data
public class FormDto {

    private String mode;

    @Valid
    private AuthorInfo authorInfo;

    @Valid
    private NewsInfo newsInfo;

    @Valid
    private Medias medias;

}
