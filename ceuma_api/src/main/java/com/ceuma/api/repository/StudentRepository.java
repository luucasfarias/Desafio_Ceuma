package com.ceuma.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ceuma.api.model.Student;
import com.ceuma.api.repository.student.StudentRepositoryQuery;

public interface StudentRepository extends JpaRepository<Student, Long>, StudentRepositoryQuery {

	
}
