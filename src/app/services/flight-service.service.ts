import { Injectable } from '@angular/core';
import {Flight} from '../flight'

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  flight: Flight[] ;

  constructor() { 
    this.flight=[{
      "flightNumber": "abc123",
      "origin": "bangalore",
      "destination": "delhi",
      "flightDate":"10/11/2020"
    },
    {
      "flightNumber": "pqr456",
    "origin": "mumbai",
    "destination": "bangalore",
    "flightDate":"22/09/2022"
    }];
  }

  getAvailableFlights(origin:String|undefined, destination : String|undefined, flightDate:String|undefined):Flight[] {


    return this.flight;
  
    
  }
  getFlightByflightNumber(flightNumber: string):Flight{
    return new Flight(flightNumber,"Bangalore","Delhi","05/01/2023");

  }

  updateFlight(updatedFlight:Flight):Flight[]{

    return [{
      "flightNumber": updatedFlight.flightNumber,
      "origin": updatedFlight.origin,
      "destination": updatedFlight.destination,
      "flightDate":updatedFlight.flightDate
    },
    {
      "flightNumber": "pqr456",
    "origin": "mumbai",
    "destination": "bangalore",
    "flightDate":"22/09/2022"
    }]

  }
  
}
