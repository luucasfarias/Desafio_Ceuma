package com.ceuma.api.repository.student;

import java.util.List;

import com.ceuma.api.model.Student;
import com.ceuma.api.repository.filter.StudentFilter;

public interface StudentRepositoryQuery {
	
	public List<Student> filterStudents(StudentFilter studentFilter);
}
