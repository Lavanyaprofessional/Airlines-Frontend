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
  flightId:number|undefined;
  flight: Flight =new Flight();
  constructor(private flightServiceService: FlightServiceService, private route: ActivatedRoute, private router: Router ){

  }
  ngOnInit(): void {
    this.flightId= this.route.snapshot.params['flightId'];
    //this.flightServiceService.getAvailableFlights(this.origin,this.destination,this.flightDate){
    this.flightServiceService.getFlightByFlightId(this.flightId).subscribe(data =>{
      this.flight=data;
    },error => console.log(error));
    }

    onSubmit(){
      this.flightServiceService.updateFlight(this.flightId,this.flight).subscribe(data =>{
        this.router.navigate(['/flight-list']);
      },
      error =>console.log(error));
      
    }
  }


