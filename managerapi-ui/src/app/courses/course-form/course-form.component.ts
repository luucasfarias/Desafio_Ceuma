import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/primeng';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Course } from 'app/core/model';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course = new Course();

  constructor(
    private courseService: CoursesService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private routerDirect: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastrar novo curso');
    console.log(this.route.snapshot.params['id']);

    const idCourse = this.route.snapshot.params['id'];
    if (idCourse) {
      this.loadCourses(idCourse);
    }
  }

  get isEditing() {
    return Boolean(this.course.id);
  }

  loadCourses(id: number) {
    this.courseService.buscarPorCodigo(id).then(response => {
      this.course = response;
      this.updateTitleEdition();
    })
      .catch(error => this.errorHandler.handle(error));
  }

  addingCourse(form: FormControl) {
    this.courseService.saveCourses(this.course)
      .then(() => {
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

  newCourse(form: FormControl) {
    form.reset();
    this.course = new Course();
    this.routerDirect.navigate(['/cursos/novo']);
  }

  cleanFields(form: FormControl) {
    form.reset();
    this.course = new Course();
  }

  updateTitleEdition() {
    this.title.setTitle(`Editar curso: ${this.course.name}`);
  }

}
