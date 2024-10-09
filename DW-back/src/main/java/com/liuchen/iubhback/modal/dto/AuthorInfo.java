package com.liuchen.iubhback.modal.dto;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class AuthorInfo {

    @NotNull(message = "Gender cannot be null")  // 性别不能为空
    @Pattern(regexp = "Mr|Mrs|Ms}", message = "Gender must be male or female")
    private String gender;

    @NotNull(message = "Name cannot be null")  // 名字不能为空
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;

    @NotNull(message = "Age cannot be null")
    @Min(value = 1, message = "Age must be at least 1")
    @Max(value = 120, message = "Age must be at most 120")
    private String age;

    @Pattern(regexp = "\\d{5}", message = "Postcode must be a 5 digit number")  // 验证邮政编码为5位数字
    private String postcode;

    @NotNull(message = "Address cannot be null")
    private String address;

    @NotNull(message = "Country cannot be null")
    private Country country;

    @NotNull(message = "Region cannot be null")
    private Region region;

    @NotNull(message = "City cannot be null")
    private City city;

}
