import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { EmployeeFromComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFromComponent,
    EmployeeListComponent
  ],

  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
