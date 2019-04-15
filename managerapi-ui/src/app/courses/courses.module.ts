import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule, InputTextModule, ButtonModule, DataTableModule, TooltipModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CalendarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    DialogModule,
    RouterModule,
    CalendarModule,

    SharedModule
  ],
  declarations: [CourseSearchComponent, CourseFormComponent],
  exports: []
})
export class CoursesModule { }
