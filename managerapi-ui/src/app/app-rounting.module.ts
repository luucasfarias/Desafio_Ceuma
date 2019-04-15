import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardComponent } from './core/card/card.component';
import { StudentSearchComponent } from './students/student-search/student-search.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { CourseComponent } from './courses/course/course.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { path: '', component: CardComponent, pathMatch: 'full' },
  { path: 'alunos', component: StudentSearchComponent },
  { path: 'alunos/novo', component: StudentFormComponent },
  { path: 'alunos/:id', component: StudentFormComponent },
  { path: 'cursos', component: CourseComponent },
  { path: 'cursos:id', component: CourseComponent },
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
