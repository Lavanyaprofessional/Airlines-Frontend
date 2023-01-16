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
  //flightService:FlightServiceService=new FlightServiceService();
  //flightUpdate:Flight=new Flight();

  constructor(private flightService: FlightServiceService, private router: Router){ 
    // this.flights=[{
    //   "flightNumber": "abc123456",
    //   "origin": "bangalore",
    //   "destination": "delhi",
    //   "flightDate":"10/11/2020"
    // },
    // {
    //   "flightNumber": "pqr123456",
    // "origin": "mumbai",
    // "destination": "bangalore",
    // "flightDate":"22/09/2022"
    // }];

    this.flights=[];
  }

  ngOnInit(): void {
    //this.getFlight();
    console.log(this.flights);
    
    if (this.flights.length == 0){
      this.getFlight();
    }
    

    
    
  }

  
  
  private getFlight(){
    this.flightService.getFlightList().subscribe(data => {
      this.flights = data;
      console.log(data);
      console.log("Flights")
      console.log(this.flights)
    });
    
    
  }
// updateFlight(flightNumber: string|undefined){
//   this.router.navigate(['update-flight',flightNumber]);
//   this.flightUpdate=this.flightService.getFlightByflightNumber("flightNumber");

  //update flight

  //this.flights=this.flightService.updateFlight(this.flightUpdate)

  // updateFlight(flightNumber:string|undefined){
  //   this.router.navigate(['update-flight',flightNumber]);
  // }
  updateFlight(flightId:number|undefined){
    this.router.navigate(['update-flight',flightId]);
  }
  deleteFlight(flightId:number|undefined){
    this.flightService.deleteFlight(flightId).subscribe(data=>{
      console.log(data);
      alert("Flight Details deleted successfully!")
      this.getFlight();
    })

  }

}






