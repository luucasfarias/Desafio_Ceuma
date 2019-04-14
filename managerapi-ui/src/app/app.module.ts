import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { CoursesService } from './courses/courses.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    StudentsModule,
    CoursesModule,
    CoreModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
