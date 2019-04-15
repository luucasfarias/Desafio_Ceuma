import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'app/courses/courses.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Student } from 'app/core/model';
import { FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  courses = [];

  student = new Student();

  constructor(
    private couseService: CoursesService,
    private studentService: StudentService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private routerDirect: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastrar novo aluno(a)');
    console.log(this.route.snapshot.params['id']);

    const idStudent = this.route.snapshot.params['id'];
    if (idStudent) {
      this.loadStudent(idStudent);
    }

    this.loadCourses();
  }

  get isEditing() {
    return Boolean(this.student.id);
  }

  loadCourses() {
    return this.couseService.searchCourse()
      .then(response => {
        this.courses = response.map(c => {
          return { label: c.name, value: c.id };
        })
      }).catch(error => this.errorHandler.handle(error));
  }

  loadStudent(id: number) {
    this.studentService.buscarPorCodigo(id).then(response => {
      this.student = response;
      this.updateTitleEdition();
    })
      .catch(error => this.errorHandler.handle(error));
  }

  addingStudent(form: FormControl) {
    this.studentService.saveStudents(this.student)
      .then(() => {
        this.toasty.success('Aluno cadastrado com sucesso!');
        form.reset();
        this.student = new Student();
      })
      .catch(error => this.errorHandler.handle(error));
    console.log(this.student);

  }

  updateStudent(form: FormControl) {
    this.studentService.update(this.student).then(response => {
      this.student = response;
      this.toasty.success('Aluno(a) alterado com sucesso!');
      this.updateTitleEdition();
    }).catch(error => this.errorHandler.handle(error));
  }

  save(form: FormControl) {
    if (this.isEditing) {
      this.updateStudent(form);
    } else {
      this.addingStudent(form);
    }
  }

  newStudent(form: FormControl) {
    this.routerDirect.navigate(['/alunos/novo']);
  }

  cleanFields(form: FormControl) {
    form.reset();
    this.student = new Student();
  }

  updateTitleEdition() {
    this.title.setTitle(`Editar aluno(a): ${this.student.name}`);
  }

}
