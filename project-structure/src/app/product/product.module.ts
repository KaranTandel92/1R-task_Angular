import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './createTable/data-list/data-list.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    DataListComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class ProductModule { }
