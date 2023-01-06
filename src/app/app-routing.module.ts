import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {HomeComponent} from "./home/home.component"
import { UpdateFlightComponent } from './update-flight/update-flight.component';

const routes: Routes = [
  {path:'flight-list', component:FlightListComponent},
  {path: 'home', component: HomeComponent},
{path:'',redirectTo:'home', pathMatch:'full'},
{path:'create-flight', component: CreateFlightComponent},
{path:'update-flight/:flightNumber', component : UpdateFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
