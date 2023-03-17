import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(d => d.EmployeeModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(j => j.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
