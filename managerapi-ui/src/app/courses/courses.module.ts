import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { DialogModule, InputTextModule, ButtonModule, DataTableModule, TooltipModule, MessagesModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

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

    SharedModule
  ],
  declarations: [CourseComponent],
  exports: [CourseComponent]
})
export class CoursesModule { }
