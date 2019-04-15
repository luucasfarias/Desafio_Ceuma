import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ToastyModule} from 'ng2-toasty';

import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { CoursesService } from './courses/courses.service';
import { StudentService } from './students/student.service';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastyModule.forRoot(),

    ConfirmDialogModule,

    StudentsModule,
    CoursesModule,
    CoreModule,

  ],
  providers: [CoursesService, StudentService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
