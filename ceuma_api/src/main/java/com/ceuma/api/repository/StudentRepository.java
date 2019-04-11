package com.ceuma.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ceuma.api.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
