import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {FlightServiceService} from './services/flight-service.service';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateFlightComponent,
    HomeComponent,
    FlightListComponent,
    UpdateFlightComponent,
    UpdateDialogComponent,
    FlightDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
