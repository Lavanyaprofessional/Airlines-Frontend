import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit{
  flightNumber:string|undefined;
  flight: Flight =new Flight();
  constructor(private flightServiceService: FlightServiceService, private route: ActivatedRoute, private router: Router ){

  }
  ngOnInit(): void {
    this.flightNumber= this.route.snapshot.params['flightNumber'];
    //this.flightServiceService.getAvailableFlights(this.origin,this.destination,this.flightDate){
      
    }

    onSubmit(){
      console.log("Update flight")
    }
  }


