import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule
  ]
})
export class ProductModule { }
