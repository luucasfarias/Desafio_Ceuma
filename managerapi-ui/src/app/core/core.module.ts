import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';

import { StudentService } from 'app/students/student.service';
import { CoursesService } from 'app/courses/courses.service';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  declarations: [NavbarComponent],
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
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
