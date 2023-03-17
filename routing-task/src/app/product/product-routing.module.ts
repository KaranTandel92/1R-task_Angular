import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from '../core/auth-service.service';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: '', redirectTo: "list-Component", pathMatch: 'full' },
  { path: 'list-Component', component: ListComponent, canActivate: [AuthServiceService] },
  { path: 'detailsComponent/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
