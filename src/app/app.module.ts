import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
// import { RequestOptions} from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {FlightServiceService} from './services/flight-service.service';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { BookComponent } from './book/book.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateFlightComponent,
    HomeComponent,
    FlightListComponent,
    UpdateFlightComponent,
    UpdateDialogComponent,
    FlightDetailsComponent,
    BookComponent,
    PassengerDetailsComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // RequestOptions,
  ],
  providers: [FlightServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
