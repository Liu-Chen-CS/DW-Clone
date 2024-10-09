package com.liuchen.iubhback.modal.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="medias")
@Data
public class Medias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mediaId;

    private String videoLink;

    private String imageLink;

    @ManyToOne
    @JoinColumn(name = "news_id", referencedColumnName = "newsIn")
    @JsonBackReference
    private News news;
}
