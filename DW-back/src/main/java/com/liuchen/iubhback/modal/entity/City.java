package com.liuchen.iubhback.modal.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cityId;

    private String cityName;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Postcode> postcodes;

    @ManyToOne
    @JoinColumn(name = "region_id", referencedColumnName = "regionId", nullable = false)
    @JsonIgnore
    private Region region;

    @OneToMany(mappedBy = "city")
    @JsonBackReference
    private List<Author> authors;

}
