import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  dateValue: Date;

  courses = [];

  display: boolean = false;

  ngOnInit() {
    this.search();
  }

  showDialog() {
    this.display = true;
  }

  constructor(private courseService: CoursesService) { }

  search() {
    this.courseService.searchCourse()
      .then(response => this.courses = response);
  }
}
