import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'app/courses/courses.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  courses = [];

  constructor(
    private couseService: CoursesService,
    private errorHandler: ErrorHandlerService
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

}
