import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoursesService {

  courseUrl = 'http://localhost:8080/courses';

  constructor(private http: Http) { }

  searchCourse(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AY2V1bWEuY29tOmFkbWlu');

    return this.http.get(`${this.courseUrl}`, { headers: headers })
      .toPromise().then(response => response.json())
  }

}
