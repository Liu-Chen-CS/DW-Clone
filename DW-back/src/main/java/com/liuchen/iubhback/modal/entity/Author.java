package com.liuchen.iubhback.modal.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name="author")
@Data
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer authorId;

    private String gender;

    private String name;

    private Integer age;

    private String postcode;

    private String address;

    @ManyToOne
    @JoinColumn(name="countryId", referencedColumnName = "countryId")
    @JsonManagedReference
    private Country country;

    @ManyToOne
    @JoinColumn(name = "regionId", referencedColumnName = "regionId")
    @JsonManagedReference
    private Region region;

    @ManyToOne
    @JoinColumn(name = "cityId ", referencedColumnName = "cityId")
    @JsonManagedReference
    private City city;

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<News> newsList;

}
