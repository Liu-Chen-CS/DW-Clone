package com.liuchen.iubhback.repository;

import com.liuchen.iubhback.modal.dto.NewsMediaDto;
import com.liuchen.iubhback.modal.entity.News;
import com.liuchen.iubhback.modal.vo.other.NewsListInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {

    @Query("SELECT new com.liuchen.iubhback.modal.dto.NewsMediaDto(m.imageLink, n.title, n.content, n.localDateTime) " +
            "FROM News n JOIN n.mediaList m " +
            "WHERE n.type = 'political'" +
            "order by n.localDateTime desc "
    )
    List<NewsMediaDto> findNewsMediaByTypePolitical();

    @Query("SELECT new com.liuchen.iubhback.modal.dto.NewsMediaDto(m.imageLink, n.title, n.content, n.localDateTime) " +
            "FROM News n JOIN n.mediaList m " +
            "WHERE n.type = 'sports'" +
            "order by n.localDateTime desc "
    )
    List<NewsMediaDto> findNewsMediaByTypeSports();

    @Query("SELECT new com.liuchen.iubhback.modal.dto.NewsMediaDto(m.imageLink, n.title, n.content, n.localDateTime) " +
            "FROM News n JOIN n.mediaList m " +
            "WHERE n.type = 'breaking'" +
            "order by n.localDateTime desc "
    )
    List<NewsMediaDto> findNewsMediaByTypeBreaking();

    @Query("SELECT new com.liuchen.iubhback.modal.vo.other.NewsListInfo(n.title, a.name, n.type, n.localDateTime, n.newsIn) " +
            "FROM News n JOIN n.author a " +
            "ORDER BY n.localDateTime DESC"
    )
    List<NewsListInfo> findNewsMediaByTypeAll();

    @Modifying
    @Query("DELETE FROM News n WHERE n.newsIn = :deleteId")
    void deleteNewsById(Integer deleteId);

    @Query("SELECT n FROM News n JOIN FETCH n.author JOIN FETCH n.mediaList WHERE n.newsIn = :newsId")
    News findNewsById(Integer newsId);

}
