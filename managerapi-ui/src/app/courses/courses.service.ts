import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoursesService {

  courseUrl = 'http://localhost:8080/courses';

  constructor(private http: Http) { }

  searchCourse(): Promise<any> {
    return this.http.get(`${this.courseUrl}`).toPromise().then(response => {
      console.log(response);
    });
  }

}
