import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { DialogModule, InputTextModule, ButtonModule, DataTableModule, TooltipModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    DialogModule
  ],
  declarations: [CourseComponent],
  exports: [CourseComponent]
})
export class CoursesModule { }
