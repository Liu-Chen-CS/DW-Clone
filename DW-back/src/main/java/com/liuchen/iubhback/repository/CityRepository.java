package com.liuchen.iubhback.repository;

import com.liuchen.iubhback.modal.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

    List<City> findByRegion_RegionId(Integer regionId);

}
