import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PassengerRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent,
    DetailsComponent
  ],
})
export class PassengerModule { }
