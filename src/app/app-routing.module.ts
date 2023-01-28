import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';

import { BookComponent } from './book/book.component';
import { CheckInComponent } from './checkin/check-in/check-in.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {HomeComponent} from "./home/home.component"
import { LoginComponent } from './login/login.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';

const routes: Routes = [
  {path:'flight-list', component:FlightListComponent},
  {path: 'home', component: HomeComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'create-flight', component: CreateFlightComponent},
  {path:'update-flight/:flightId', component : UpdateFlightComponent},
  {path:'flight-details', component:FlightDetailsComponent},
  {path:'book-flight/:flightId', component:BookComponent},
  {path:'passenger-details/:Flight', component:PassengerDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'book-list', component:BookListComponent},
  {path:'book-details/:bookId',component:BookDetailsComponent},
  {path:'admin-page',component:AdminPageComponent},
  {path:'check-in/:firstName',component:CheckInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
