import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardComponent } from './core/card/card.component';
import { StudentSearchComponent } from './students/student-search/student-search.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { CourseSearchComponent } from './courses/course-search/course-search.component';
import { CourseFormComponent } from './courses/course-form/course-form.component';
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/auth.guard';
import { NotAuthorizedComponent } from './core/not-authorized.component';

const routes: Routes = [
  // { path: '', component: CardComponent, pathMatch: 'full' },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: CardComponent
  },
  {
    path: 'alunos', component: StudentSearchComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_STUDENT'] }
  },
  {
    path: 'alunos/novo', component: StudentFormComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_STUDENT'] }
  },
  {
    path: 'alunos/:id', component: StudentFormComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_UPDATE_STUDENT'] }
  },
  {
    path: 'cursos', component: CourseSearchComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_COURSE'] }
  },
  {
    path: 'cursos/novo', component: CourseFormComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_COURSE'] }
  },

  {
    path: 'cursos/:id', component: CourseFormComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_UPDATE_COURSE'] }
  },

  { path: 'nao-autorizado', component: NotAuthorizedComponent },
  { path: 'pagina-nao-encontrada', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' },

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
