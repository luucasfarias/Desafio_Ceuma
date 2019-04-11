package com.ceuma.api.repository.student;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ceuma.api.model.Student;
import com.ceuma.api.repository.filter.StudentFilter;

public interface StudentRepositoryQuery {
	
	public Page<Student> filterStudents(StudentFilter studentFilter, Pageable pageable);
}
