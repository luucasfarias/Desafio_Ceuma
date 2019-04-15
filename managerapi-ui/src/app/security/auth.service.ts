import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  urlTokenJWT = 'http://localhost:8080/oauth/token';

  constructor(private htpp: Http) { }

  login(username_app: string, password_app: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');
    const body = `username=${username_app}&password=${password_app}&grant_type=password`;

   return this.htpp.post(this.urlTokenJWT, body, { headers })
      .toPromise().then(response => {
        console.log(response);
      }).catch(response => {
        console.log(response);
      });
  }
}
