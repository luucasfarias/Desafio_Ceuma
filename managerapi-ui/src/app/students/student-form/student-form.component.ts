import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'app/courses/courses.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Student } from 'app/core/model';
import { FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { ToastyService } from 'ng2-toasty';


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
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    return this.couseService.searchCourse()
      .then(response => {
        this.courses = response.map(c => {
          return { label: c.name, value: c.id };
        })
      }).catch(error => this.errorHandler.handle(error));
  }

  save(form: FormControl) {
    this.studentService.saveStudents(this.student)
      .then(() => {
        this.toasty.success('Aluno cadastrado com sucesso!');
        form.reset();
        this.student = new Student();
      })
      .catch(error => this.errorHandler.handle(error));
    console.log(this.student);

  }

}
