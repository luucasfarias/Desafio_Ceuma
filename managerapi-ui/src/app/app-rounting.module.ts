import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardComponent } from './core/card/card.component';
import { StudentSearchComponent } from './students/student-search/student-search.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { CourseSearchComponent } from './courses/course-search/course-search.component';
import { CourseFormComponent } from './courses/course-form/course-form.component';

const routes: Routes = [
  { path: '', component: CardComponent, pathMatch: 'full' },
  { path: 'alunos', component: StudentSearchComponent },
  { path: 'alunos/novo', component: StudentFormComponent },
  { path: 'alunos/:id', component: StudentFormComponent },
  { path: 'cursos', component: CourseSearchComponent },
  { path: 'cursos/novo', component: CourseFormComponent },
  { path: 'cursos/:id', component: CourseFormComponent },
  { path: 'pagina-nao-encontrada', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
