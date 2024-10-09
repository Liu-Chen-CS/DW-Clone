package com.liuchen.iubhback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class IubhBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(IubhBackApplication.class, args);
    }

}
