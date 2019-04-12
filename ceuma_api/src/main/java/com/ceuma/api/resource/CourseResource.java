package com.ceuma.api.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.ceuma.api.event.ResourceCreatedEvent;
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

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_SEARCH_COURSE') and #oauth2.hasScope('read')")
	public List<Course> listAll() {
		return courseRepository.findAll();
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_REGISTER_COURSE') and #oauth2.hasScope('write')")
	public ResponseEntity<Course> createCourse(@Valid @RequestBody Course course, HttpServletResponse response) {
		Course courseSaved = courseRepository.save(course);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, courseSaved.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(courseSaved);
	}

	@GetMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_SEARCH_COURSE') and #oauth2.hasScope('read')")
	public ResponseEntity<Course> searchById(@PathVariable Long id) {
		Course course = courseRepository.findOne(id);
		return course != null ? ResponseEntity.ok(course) : ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_DELETE_COURSE')")
	public void deleteCourse(@PathVariable Long id) {
		courseRepository.delete(id);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_UPDATE_COURSE')")
	public ResponseEntity<Course> updateCourse(@PathVariable Long id, @Valid @RequestBody Course course) {
		Course courseSaved = courseService.update(id, course);
		return ResponseEntity.ok(courseSaved);
	}
}
