import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './product/details/details.component';
import { ListComponent } from './product/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: "list-Component", pathMatch: 'full' },
  { path: 'list-Component', component: ListComponent },
  { path: 'details-Component/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
