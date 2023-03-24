import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: "", redirectTo: 'employeelist', pathMatch: 'full' },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'forms', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
