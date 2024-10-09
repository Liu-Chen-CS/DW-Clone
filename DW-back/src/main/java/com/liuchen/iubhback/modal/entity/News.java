package com.liuchen.iubhback.modal.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="news")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer newsIn;

    private String title;

    private String content;

    private String type;

    private LocalDateTime localDateTime;

    @ManyToOne
    @JoinColumn(name="author_id", referencedColumnName = "authorId")
    @JsonManagedReference
    private Author author;

    @OneToMany(mappedBy = "news", cascade = CascadeType.REMOVE, orphanRemoval = true)
    @JsonManagedReference
    private List<Medias> mediaList;
}
