import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipe/search.pipe';
import { TableDirective } from './directive/table.directive';



@NgModule({
  declarations: [
    SearchPipe,
    TableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchPipe,
    TableDirective
  ]
})
export class ShareModule { }
