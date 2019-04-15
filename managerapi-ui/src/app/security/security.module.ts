import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class SecurityModule { }
