import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { CeumaHttp } from './ceuma-http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';

export function authHttpServiceFactory(auth: AuthService, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]
  });
  return new CeumaHttp(auth, config, http, options);
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [AuthService, Http, RequestOptions]
    },
    AuthGuard,
    LogoutService
  ]
})
export class SecurityModule { }
