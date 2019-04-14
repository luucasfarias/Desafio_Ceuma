import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  courses = [
    { label: 'Administração', value: 1 },
    { label: 'Direito', value: 2 },
    { label: 'Medicina', value: 3 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
