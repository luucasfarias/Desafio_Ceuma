import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';

import { StudentService } from 'app/students/student.service';
import { CoursesService } from 'app/courses/courses.service';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'app/security/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { NotAuthorizedComponent } from './not-authorized.component';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent, CardComponent, PageNotFoundComponent,
    NotAuthorizedComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ErrorHandlerService,
    CoursesService,
    StudentService,
    ConfirmationService,
    Title,
    AuthService,
    JwtHelper,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
