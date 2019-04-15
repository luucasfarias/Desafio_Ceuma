import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  urlTokenJWT = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private htpp: Http,
    private jwtHelper: JwtHelper
  ) {
    this.loadToken();
  }

  login(username_app: string, password_app: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');
    const body = `username=${username_app}&password=${password_app}&grant_type=password`;

    return this.htpp.post(this.urlTokenJWT, body, { headers })
      .toPromise().then(response => {
        this.storeToken(response.json().access_token);
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  }

  private storeToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.storeToken(token);
    }
  }
}
