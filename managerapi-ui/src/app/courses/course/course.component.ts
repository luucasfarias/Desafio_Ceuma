import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/primeng';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Course } from 'app/core/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  dateValue: Date;

  courses = [];

  display: boolean = false;

  course = new Course();

  ngOnInit() {
    this.search();
  }

  showDialog() {
    this.display = true;
  }

  constructor(
    private courseService: CoursesService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) { }

  search() {
    this.courseService.searchCourse()
      .then(response => this.courses = response);
  }

  delete(course: any) {
    this.courseService.deleteCourses(course.id).then(() => {
      this.search();
      this.toasty.success('Curso excluído com sucesso!');
    }).catch(error => this.errorHandler.handle(error));
  }

  confirmDelete(student: any) {
    this.confirmation.confirm(
      {
        message: 'Você tem certeza que seja excluir este curso?',
        accept: () => {
          this.delete(student);
        }
      }
    );
  }

  save(form: FormControl) {
    this.courseService.saveCourses(this.course).then(() => {
      this.toasty.success('Curso cadastrado com sucesso!');
      form.reset();
      this.course = new Course();
    })
      .catch(error => this.errorHandler.handle(error));
    console.log(this.course);

  }
}
