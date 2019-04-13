import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  students = [
    {
      name: 'Ana karoline sousa farias', cpf: '83873912', course: 'Administração',
      address: 'Rua Israel, casa 30, São cristovão, Sao Luis MA'
    },
    { name: 'Ana sousa farias', cpf: '83873912', course: 'Direito', address: 'Rua Israel, casa 30, São cristovão, Sao Luis MA' },
    { name: 'karoline sousa farias', cpf: '83873912', course: 'Medicina', address: 'Rua Israel, casa 30, São cristovão, Sao Luis MA' },
    { name: 'Ana sousa farias', cpf: '83873912', course: 'Direito', address: 'Rua Israel, casa 30, São cristovão, Sao Luis MA' },
    { name: 'karoline sousa farias', cpf: '83873912', course: 'Medicina', address: 'Rua Israel, casa 30, São cristovão, Sao Luis MA' },
    { name: 'Ana sousa farias', cpf: '83873912', course: 'Direito', address: 'Rua Israel, casa 30, São cristovão, Sao Luis MA' },
    { name: 'karoline sousa farias', cpf: '83873912', course: 'Medicina', address: 'Rua Israel, casa 30, São cristovão, Sao Luis MA' }
  ];

}
