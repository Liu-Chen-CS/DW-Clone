package com.liuchen.iubhback.repository;

import com.liuchen.iubhback.modal.entity.Medias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MediasRepository extends JpaRepository<Medias, Integer> {

    @Modifying
    @Query("DELETE FROM Medias m WHERE m.news.newsIn = :deleteId")
    void deleteMediasByNewsId(Integer deleteId);

}
