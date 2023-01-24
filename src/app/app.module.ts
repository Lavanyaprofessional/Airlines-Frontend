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
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
//import { FormDirectiveDirective } from './form-directive.directive';


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
    BookListComponent,
    BookDetailsComponent,
    AdminPageComponent,
    
    //FormDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [FlightServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
