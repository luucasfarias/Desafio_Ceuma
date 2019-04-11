package com.ceuma.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ceuma.api.model.Course;

public interface CourceRepository extends JpaRepository<Course, Long> {

}
