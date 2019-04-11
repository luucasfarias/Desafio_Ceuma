package com.ceuma.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ceuma.api.model.Course;
import com.ceuma.api.repository.CourceRepository;

@RestController
@RequestMapping("/courses")
public class CourseResource {
	
	// inject dependency
	
	@Autowired
	private CourceRepository courseRepository;
	
	@GetMapping
	public List<Course> listAll() {
		return courseRepository.findAll();
	}
}
