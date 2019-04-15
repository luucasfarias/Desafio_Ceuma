import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { Routes, RouterModule } from '@angular/router';
import { StudentSearchComponent } from './students/student-search/student-search.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { CourseComponent } from './courses/course/course.component';

const routes: Routes = [
  { path: 'alunos', component: StudentSearchComponent },
  { path: 'alunos/novo', component: StudentFormComponent },
  { path: 'alunos/:id', component: StudentFormComponent },
  { path: 'cursos', component: CourseComponent },
  { path: 'cursos:id', component: CourseComponent },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    StudentsModule,
    CoursesModule,
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
