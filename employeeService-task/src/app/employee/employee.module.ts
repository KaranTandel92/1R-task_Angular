import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    EmployeelistComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
