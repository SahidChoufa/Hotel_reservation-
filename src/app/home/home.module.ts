import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationModule } from '../reservation/reservation.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReservationModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }