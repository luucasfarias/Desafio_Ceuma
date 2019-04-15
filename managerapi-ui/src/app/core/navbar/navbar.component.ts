import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/security/auth.service';
import { LogoutService } from 'app/security/logout.service';
import { ErrorHandlerService } from '../error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  logout() {
    this.logoutService.logout().then(() => {
      this.router.navigate(['/login']);
    })
      .catch(error => this.errorHandler.handle(error));
  }
}
