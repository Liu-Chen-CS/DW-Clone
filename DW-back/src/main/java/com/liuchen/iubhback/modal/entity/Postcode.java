package com.liuchen.iubhback.modal.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "postcode")
public class Postcode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postcodeId;

    private String postcode;

    @ManyToOne
    @JoinColumn(name="city_id", referencedColumnName = "cityId", nullable = false)
    @JsonManagedReference
    private City city;

}
