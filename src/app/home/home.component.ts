import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import {FlightListComponent} from '../flight-list/flight-list.component'
import {FlightServiceService} from '../services/flight-service.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  flight: Flight=new Flight();
  flights :Flight[];
  flightService: FlightServiceService=new FlightServiceService();

  title="BrownField Airline";

  constructor(){
    this.flight
    this.flights=[]

  }
  ngOnInit(): void {
    
  }
  onSubmit(){

    this.flights=this.flightService.getAvailableFlights(this.flight.origin,this.flight.destination,this.flight.flightDate)
    console.log(this.flights)
}}
