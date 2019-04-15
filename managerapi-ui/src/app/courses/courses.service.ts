import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Course } from 'app/core/model';

@Injectable()
export class CoursesService {

  courseUrl = 'http://localhost:8080/courses';

  constructor(private http: Http) { }

  searchCourse(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AY2V1bWEuY29tOmFkbWlu');

    return this.http.get(`${this.courseUrl}`, { headers: headers })
      .toPromise().then(response => response.json());
  }

  deleteCourses(id: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AY2V1bWEuY29tOmFkbWlu');

    return this.http.delete(`${this.courseUrl}/${id}`, { headers })
      .toPromise().then(() => null);
  }

  saveCourses(course: Course): Promise<Course> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AY2V1bWEuY29tOmFkbWlu');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.courseUrl,
      JSON.stringify(course), { headers })
      .toPromise()
      .then(response => response.json());
  }

}