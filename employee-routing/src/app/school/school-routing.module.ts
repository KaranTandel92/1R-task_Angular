import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { SchoolListComponent } from './school-list/school-list.component';

const routes: Routes = [
  { path: "", redirectTo: "schoollist", pathMatch: 'full' },
  { path: "schoollist", component: SchoolListComponent },
  { path: "schoolDetails/:id", component: SchoolDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
