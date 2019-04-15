import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/primeng';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Course } from 'app/core/model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'app/security/auth.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {

  dateValue: Date;

  courses = [];

  display: boolean = false;

  course = new Course();

  ngOnInit() {
    this.title.setTitle('Pesquisa de cursos');
    const idCourse = this.route.snapshot.params['id'];
    if (idCourse) {
      this.loadCourses(idCourse);
    }
    this.search();
  }

  showDialog() {
    this.display = true;
  }

  constructor(
    private auth: AuthService,
    private courseService: CoursesService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private routerDirect: Router,
    private title: Title
  ) { }

  get isEditing() {
    return Boolean(this.course.id);
  }

  search() {
    this.courseService.searchCourse()
      .then(response => this.courses = response);
  }

  loadCourses(id: number) {
    this.courseService.buscarPorCodigo(id).then(response => {
      this.course = response;
      this.updateTitleEdition();
    })
      .catch(error => this.errorHandler.handle(error));
  }

  delete(course: any) {
    this.courseService.deleteCourses(course.id).then(() => {
      this.search();
      this.toasty.success('Curso excluído com sucesso!');
    }).catch(error => this.errorHandler.handle(error));
  }

  confirmDelete(student: any) {
    this.confirmation.confirm(
      {
        message: 'Você tem certeza que seja excluir este curso?',
        accept: () => {
          this.delete(student);
        }
      }
    );
  }

  addingCourse(form: FormControl) {
    this.courseService.saveCourses(this.course).then(() => {
      this.toasty.success('Curso cadastrado com sucesso!');
      form.reset();
      this.course = new Course();
    })
      .catch(error => this.errorHandler.handle(error));
    console.log(this.course);
  }

  updateCourse(form: FormControl) {
    this.courseService.update(this.course).then(response => {
      this.course = response;
      this.toasty.success('Curso alterado com sucesso!');
      this.updateTitleEdition();
    }).catch(error => this.errorHandler.handle(error));
  }

  save(form: FormControl) {
    if (this.isEditing) {
      this.updateCourse(form);
    } else {
      this.addingCourse(form);
    }
  }

  cleanFields(form: FormControl) {
    form.reset();
    this.course = new Course();
  }

  updateTitleEdition() {
    this.title.setTitle(`Editar curso: ${this.course.name}`);
  }

}
