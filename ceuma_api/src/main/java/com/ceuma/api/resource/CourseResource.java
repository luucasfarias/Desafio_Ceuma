package com.ceuma.api.resource;

import java.net.URI;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ceuma.api.model.Course;
import com.ceuma.api.repository.CourceRepository;
import com.ceuma.api.service.CourseService;

@RestController
@RequestMapping("/courses")
public class CourseResource {

	// inject dependency

	@Autowired
	private CourceRepository courseRepository;
	
	@Autowired
	private CourseService courseService;

	@GetMapping
	public List<Course> listAll() {
		return courseRepository.findAll();
	}

	@PostMapping
	public ResponseEntity<Course> createCourse(@Valid @RequestBody Course course, HttpServletResponse response) {
		Course courseSaved = courseRepository.save(course);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(courseSaved.getId()).toUri();
		response.setHeader("Location", uri.toASCIIString());
		
		return ResponseEntity.created(uri).body(courseSaved);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Course> searchById(@PathVariable Long id) {
		Course course = courseRepository.findOne(id);
		return course != null ? ResponseEntity.ok(course) : ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteCourse(@PathVariable Long id) {
		courseRepository.delete(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable Long id, @Valid @RequestBody Course course) {
		Course courseSaved = courseService.update(id, course);
		return ResponseEntity.ok(courseSaved);
	}
}
