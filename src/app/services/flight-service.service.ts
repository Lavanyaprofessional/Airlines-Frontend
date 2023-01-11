import { Injectable } from '@angular/core';
import {Flight} from '../flight'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  flight: Flight[] ;
  ret:any
  

 
 private baseURL = "http://localhost:8080/api/";


  constructor( private httpClient: HttpClient) { 
    // this.flight=[{
    //   "flightNumber": "abc123",
    //   "origin": "bangalore",
    //   "destination": "delhi",
    //   "flightDate":"10/11/2020"
    // },
    // {
    //   "flightNumber": "pqr456",
    // "origin": "mumbai",
    // "destination": "bangalore",
    // "flightDate":"22/09/2022"
    // }];
    this.flight=[]
  }

  getFlightList(): Observable<Flight[]>{
   return this.httpClient.get<Flight[]>(`${this.baseURL+"allFlights"}`)
   
  }

  getAvailableFlights(origin:String|undefined, destination : String|undefined, flightdate:String|undefined): Observable<Flight[]> {


    return this.httpClient.get<Flight[]>(`${this.baseURL+"flights"}/${origin}/${destination}/${flightdate}`);
  
    
  }

  addFlight(flight:Flight){
    return this.httpClient.post<Flight>(`${this.baseURL+"addFlight"}`,flight)
  }
  
  getFlightByFlightId(flightId:number|undefined):Observable<Flight>{
    return this.httpClient.get<Flight>(`${this.baseURL+"flights"}/${flightId}`);

  }
  updateFlight(flightId:number|undefined,flight:Flight):Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"updateflight"}/${flightId}`,flight);
  }

  deleteFlight(flightId:number|undefined):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"deleteFlight"}/${flightId}`);
  }
  // getFlightByflightNumber(flightNumber: string):Flight{
  //   return new Flight(flightNumber,"Bangalore","Delhi","05/01/2023");

  // }

  // updateFlight(updatedFlight:Flight):Flight[]{

  //   return [{
  //     "flightNumber": updatedFlight.flightNumber,
  //     "origin": updatedFlight.origin,
  //     "destination": updatedFlight.destination,
  //     "flightDate":updatedFlight.flightDate
  //   },
  //   {
  //     "flightNumber": "pqr456",
  //   "origin": "mumbai",
  //   "destination": "bangalore",
  //   "flightDate":"22/09/2022"
  //   }]

  //  }
  
}
