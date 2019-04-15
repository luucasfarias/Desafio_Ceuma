import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(username_app: string, password_app: string) {
    this.auth.login(username_app, password_app)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.errorHandler.handle(error);
      })
  }

}
