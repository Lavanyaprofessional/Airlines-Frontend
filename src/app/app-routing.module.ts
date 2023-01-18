import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book/book.component';
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
  {path:'passenger-details', component:PassengerDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
