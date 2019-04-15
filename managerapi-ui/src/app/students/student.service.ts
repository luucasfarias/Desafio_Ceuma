import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Student } from 'app/core/model';
import { AuthHttp } from 'angular2-jwt';

export class StudentFilter {
  nameSearch: string;
  cpfSearch: string;
  page = 0;
  itemsPage = 6;
}

@Injectable()
export class StudentService {

  studentsUrl = 'http://localhost:8080/students';

  constructor(private http: AuthHttp) { }

  searchStudents(filter: StudentFilter): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filter.page.toString());
    params.set('size', filter.itemsPage.toString());

    if (filter.nameSearch) {
      params.set('name', filter.nameSearch);
    }

    if (filter.cpfSearch) {
      params.set('cpf', filter.cpfSearch);
    }
    return this.http.get(`${this.studentsUrl}?`, { search: params })
      .toPromise().then(response => {
        const responseJson = response.json();
        const students = responseJson.content;
        console.log('students: ', students);

        const result = {
          data: students,
          total: responseJson.totalElements
        };

        return result;
      });
  }

  deleteStudents(id: number): Promise<void> {
    return this.http.delete(`${this.studentsUrl}/${id}`)
      .toPromise().then(() => null);
  }

  saveStudents(student: Student): Promise<Student> {
    return this.http.post(this.studentsUrl,
      JSON.stringify(student))
      .toPromise().then(response => response.json());
  }

  update(student: Student): Promise<Student> {
    return this.http.put(`${this.studentsUrl}/${student.id}`,
      JSON.stringify(student))
      .toPromise()
      .then(response => {
        const studentModificator = response.json();
        return studentModificator;
      });
  }
  buscarPorCodigo(id: number): Promise<Student> {
    return this.http.get(`${this.studentsUrl}/${id}`)
      .toPromise()
      .then(response => {
        const student = response.json();
        return student;
      });
  }
}
