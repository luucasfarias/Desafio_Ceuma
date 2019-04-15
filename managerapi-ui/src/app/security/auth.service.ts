import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  [x: string]: any;

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

    return this.htpp.post(this.urlTokenJWT, body, { headers, withCredentials: true })
      .toPromise().then(response => {
        this.storeToken(response.json().access_token);
        console.log(response);
      })
      .catch(response => {
        if (response.status === 400) {
          const responseJson = response.json();
          if (responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválidos!');
          }
        }

        return Promise.reject(response);
      });
  }

  cleanAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;

  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  getNewAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');
    const body = 'grant_type=refresh_token';

    return this.http.post(this.urlTokenJWT, body, { headers, withCredentials: true })
      .toPromise().then(response => {
        this.storeToken(response.json().access_token);
        console.log('TCL: Recebe novo accesse token do refresh: ', response);
        return Promise.resolve(null);
      })
      .catch(response => {
        console.log('TCL:Erro ao renovar token: ', response);
        return Promise.resolve(null);
      })

  }

  manyPermissions(roles) {
    for (const role of roles) {
      if (this.isAllowed(role)) {
        return true;
      }
    }

    return false;
  }

  isAllowed(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
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
