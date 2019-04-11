package com.ceuma.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.ceuma.api.model.Student;
import com.ceuma.api.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository studRepository;

	public Student update(Long id, Student student) {
		Student studentSaved = searchById(id);
		BeanUtils.copyProperties(student, studentSaved, "id");
		return studRepository.save(studentSaved);
	}

	public Student searchById(Long id) {
		Student studentSaved = studRepository.findOne(id);
		if (studentSaved == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return studentSaved;
	}
}
