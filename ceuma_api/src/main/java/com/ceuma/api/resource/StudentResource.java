package com.ceuma.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ceuma.api.model.Student;
import com.ceuma.api.repository.StudentRepository;

@RestController
@RequestMapping("/students")
public class StudentResource {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@GetMapping
	public List<Student> listAll(){
		return studentRepository.findAll();
	}
}
