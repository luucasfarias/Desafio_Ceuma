package com.ceuma.api.repository.student;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.util.StringUtils;

import com.ceuma.api.model.Student;
import com.ceuma.api.repository.filter.StudentFilter;

public class StudentRepositoryImpl implements StudentRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	@Override
	public List<Student> filterStudents(StudentFilter studentFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Student> criteria = builder.createQuery(Student.class);
		Root<Student> root = criteria.from(Student.class);
		
		// creating my rules
		Predicate[] predicates = createRestrictions(studentFilter, builder, root);
		criteria.where(predicates);
		
		
		TypedQuery<Student> query = manager.createQuery(criteria);
		return query.getResultList();
	}

	private Predicate[] createRestrictions(StudentFilter studentFilter, CriteriaBuilder builder,
			Root<Student> root) {
		
		List<Predicate> predicates = new ArrayList<>();
		
		// similar to select * from student where name like '%qualquer cosia%'

		if (!StringUtils.isEmpty(studentFilter.getName())) {
				predicates.add(builder.like(builder.lower(root.get("name")),
					"%" + studentFilter.getName().toLowerCase() + "%"));
		}
		
		if (!StringUtils.isEmpty(studentFilter.getCpf())) {
				predicates.add(builder.like(builder.lower(root.get("cpf")),
					"%" + studentFilter.getCpf().toLowerCase() + "%"));
		}
		
		if (!StringUtils.isEmpty(studentFilter.getEmail())) {
				predicates.add(builder.like(builder.lower(root.get("email")),
					"%" + studentFilter.getEmail().toLowerCase() + "%"));
		}

		
		return predicates.toArray(new Predicate[predicates.size()]);
	}

}
