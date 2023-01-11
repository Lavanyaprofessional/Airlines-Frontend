import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightServiceService } from '../services/flight-service.service';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flight: Flight=new Flight();
  flights :Flight[];
  

constructor(private flightService: FlightServiceService, private route:ActivatedRoute, private router: Router ){
  this.flight.origin=this.route.snapshot.paramMap.get('origin')!
  this.flight.destination=this.route.snapshot.paramMap.get('destination')!
  this.flight.flightdate=this.route.snapshot.paramMap.get('date')!

  this.flights=[]
  console.log(this.flight)
  this.getFlightDetails()
  

}
ngOnInit(): void {
  
}

private getFlightDetails(){
  this.flightService.getAvailableFlights(this.flight.origin, this.flight.destination, this.flight.flightdate).subscribe(data=>{
    this.flights=data;
    console.log(this.flights);
    
  },error=>console.log(error))

}
passengerDetails(){
  this.router.navigate(['\passenger-details']);
}
}

