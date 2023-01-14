import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightServiceService } from '../services/flight-service.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})

export class CreateFlightComponent implements OnInit {
  flight: Flight ={
    flightId:0,
    origin: "",
    destination: "",
    flightdate: "",
    fare: {
        fareId: 0,
        fare: "",
        currency: "",
    },
    inventory: {
        id: 0,
        
    }
}

currentDate:any=new Date();

  constructor(private flightService: FlightServiceService, private router: Router) {
    
  }

  ngOnInit(): void {
    
    
  }

  saveFlight(){
    this.flightService.addFlight(this.flight).subscribe(data => {
      console.log(data);
      this.flight = new Flight();
      this.router.navigate(['/flight-list'])
  },
  error => console.log(error));}
  

  onSubmit(){
    console.log(this.flight);
    this.saveFlight();
  }


}
