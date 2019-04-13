import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses = [
    { name: 'Adiministração', date_register: new Date(2019, 20, 10), workload: '120 horas' },
    { name: 'Direito', date_register: new Date(2019, 20, 10), workload: '200 horas' },
    { name: 'Medicina', date_register: new Date(2019, 20, 10), workload: '400 horas' }
  ]
}
