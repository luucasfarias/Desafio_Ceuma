package com.ceuma.api.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
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

import com.ceuma.api.event.ResourceCreatedEvent;
import com.ceuma.api.model.Student;
import com.ceuma.api.repository.StudentRepository;
import com.ceuma.api.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentResource {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping
	public List<Student> listAll(){
		return studentRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student, HttpServletResponse response) {
		Student studentSaved= studentRepository.save(student);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, studentSaved.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(studentSaved);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Student> searchById(@PathVariable Long id) {
		Student student = studentRepository.findOne(id);
		return student != null ? ResponseEntity.ok(student) : ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteStudent(@PathVariable Long id) {
		studentRepository.delete(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Student> updateCourse(@PathVariable Long id, @Valid @RequestBody Student student) {
		Student studentSaved = studentService.update(id, student);
		return ResponseEntity.ok(studentSaved);
	}
}
