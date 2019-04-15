import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService, StudentFilter } from '../student.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'app/core/error-handler.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  totalRegisters = 0;

  filter = new StudentFilter(); // ? Instanciando a classe para ter acesso aos atributos

  students = [];

  @ViewChild('table') gridTable;

  // ? Injetano services
  constructor(
    private studentService: StudentService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    // this.search();
  }

  search(page = 0) {
    this.filter.page = page;
    this.studentService.searchStudents(this.filter)
      .then(result => {
        this.totalRegisters = result.total;
        this.students = result.data;
      }).catch(error => this.errorHandler.handle(error));
  }

  changePage(event: LazyLoadEvent) {
    const pages = event.first / event.rows;
    this.search(pages);
    console.log(event);
  }

  delete(student: any) {
    this.studentService.deleteStudents(student.id).then(() => {
      if (this.gridTable.first === 0) {
        this.search();
      } else {
        this.gridTable.first = 0;
      }
      this.toasty.success('Aluno excluído com sucesso!');
    }).catch(error => this.errorHandler.handle(error));
  }

  confirmDelete(student: any) {
    this.confirmation.confirm(
      {
        message: 'Você tem certeza que seja excluir este aluno?',
        accept: () => {
          this.delete(student);
        }
      }
    );
  }

}
