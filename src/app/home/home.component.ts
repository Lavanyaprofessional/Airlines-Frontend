import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import {FlightServiceService} from '../services/flight-service.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  flight: Flight=new Flight();
  
  title="BrownField Airline";

  constructor(private flightService : FlightServiceService, private route: ActivatedRoute, private router: Router){
    this.flight

  }
  ngOnInit(): void {
  }


  onSearch(){
      this.router.navigate(['/flight-details',{origin:this.flight.origin,destination:this.flight.destination,date:this.flight.flightDate}])
  }

    }
      
    
    




