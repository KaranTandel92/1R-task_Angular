import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product/component/product-details/product-details.component';
import { ProductListComponent } from './product/component/product-list/product-list.component';

const routes: Routes = [
  { path: "productlist", component: ProductListComponent },
  { path: "productdetail/:id", component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
