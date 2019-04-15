import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Course } from 'app/core/model';
import * as moment from 'moment';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CoursesService {

  courseUrl = 'http://localhost:8080/courses';

  constructor(private http: AuthHttp) { }

  searchCourse(): Promise<any> {
    return this.http.get(`${this.courseUrl}`)
      .toPromise().then(response => response.json());
  }

  deleteCourses(id: number): Promise<void> {
    return this.http.delete(`${this.courseUrl}/${id}`)
      .toPromise().then(() => null);
  }

  saveCourses(course: Course): Promise<Course> {
    return this.http.post(this.courseUrl,
      JSON.stringify(course))
      .toPromise()
      .then(response => response.json());
  }

  update(course: Course): Promise<Course> {
    return this.http.put(`${this.courseUrl}/${course.id}`,
      JSON.stringify(course))
      .toPromise()
      .then(response => {
        const courseModificator = response.json() as Course;

        this.converterStringsParaDatas([courseModificator]);

        return courseModificator;
      });
  }

  buscarPorCodigo(id: number): Promise<Course> {
    return this.http.get(`${this.courseUrl}/${id}`)
      .toPromise()
      .then(response => {
        const course = response.json() as Course;

        this.converterStringsParaDatas([course]);

        return course;
      });
  }

  private converterStringsParaDatas(courses: Course[]) {
    for (const course of courses) {
      course.dateRegister = moment(course.dateRegister,
        'YYYY-MM-DD').toDate();
    }
  }

}
