import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "employee", loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule) },
  { path: "school", loadChildren: () => import('./school/school.module').then(mod => mod.SchoolModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
