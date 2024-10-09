package com.liuchen.iubhback.repository;

import com.liuchen.iubhback.modal.entity.Postcode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostcodeRepository extends JpaRepository<Postcode, Integer> {

}
