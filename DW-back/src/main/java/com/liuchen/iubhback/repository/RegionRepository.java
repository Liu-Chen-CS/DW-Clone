package com.liuchen.iubhback.repository;

import com.liuchen.iubhback.modal.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionRepository extends JpaRepository<Region, Integer> {

    List<Region> findByCountry_CountryId(Integer countryId);

}
