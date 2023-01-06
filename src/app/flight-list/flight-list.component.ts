import { Component , Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import {FlightServiceService}  from '../services/flight-service.service'

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  @Input() flights:Flight[]
  flightService:FlightServiceService=new FlightServiceService();
  flightUpdate:Flight=new Flight();

  constructor(private router: Router){ 
    this.flights=[{
      "flightNumber": "abc123456",
      "origin": "bangalore",
      "destination": "delhi",
      "flightDate":"10/11/2020"
    },
    {
      "flightNumber": "pqr123456",
    "origin": "mumbai",
    "destination": "bangalore",
    "flightDate":"22/09/2022"
    }];
  }

  ngOnInit(): void {
    
    
  }
// updateFlight(flightNumber: string|undefined){
//   this.router.navigate(['update-flight',flightNumber]);
//   this.flightUpdate=this.flightService.getFlightByflightNumber("flightNumber");

  //update flight

  //this.flights=this.flightService.updateFlight(this.flightUpdate)

  updateFlight(flightNumber:string|undefined){
    this.router.navigate(['update-flight',flightNumber]);
  }

}






