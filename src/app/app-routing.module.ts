import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"list", component: ReservationListComponent},
  {path:"booking", component: ReservationFormComponent},
  {path:"edit/:id", component: ReservationFormComponent},
  {path:"admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }