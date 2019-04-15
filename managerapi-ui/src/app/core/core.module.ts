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


@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [NavbarComponent, CardComponent, PageNotFoundComponent],
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
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
