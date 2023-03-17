import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, ROUTES, Routes } from '@angular/router';
import { AuthServiceService } from '../core/auth-service.service';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  { path: '', redirectTo: "empList", pathMatch: 'full' },
  { path: "empList", component: EmpListComponent, canActivate: [AuthServiceService] },
  { path: "empDetailsComponent/:id", component: EmpDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
