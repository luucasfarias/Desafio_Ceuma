package com.ceuma.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.ceuma.api.model.Course;
import com.ceuma.api.repository.CourceRepository;

@Service
public class CourseService {
	
	@Autowired
	private CourceRepository courceRepository;
	
	public Course update(Long id, Course course) {
		Course courseSaved = searchById(id);
		BeanUtils.copyProperties(course, courseSaved, "id");
		return courceRepository.save(courseSaved);
	}
	
	public Course searchById(Long id) {
		Course courseSaved = courceRepository.findOne(id);
		if (courseSaved == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return courseSaved;
	}
}
