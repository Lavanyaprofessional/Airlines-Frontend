import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import {FlightListComponent} from '../flight-list/flight-list.component'
import {FlightServiceService} from '../services/flight-service.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  origin: string | undefined
    destination: string | undefined
    flightdate: string | undefined
  flight: Flight=new Flight();
  flights :Flight[];

  title="BrownField Airline";

  constructor(private flightService : FlightServiceService, private route: ActivatedRoute, private router: Router){
    this.flight
    this.flights=[]

  }
  ngOnInit(): void {
      
    // this.origin= this.route.snapshot.params['origin'];
    // this.destination= this.route.snapshot.params['destination'];
    // this.flightdate= this.route.snapshot.params['flightdate'];

    // this.flightService.getAvailableFlights(this.flight.origin,this.flight.destination,this.flight.flightdate).subscribe( data =>{
    //   this.flight=data;
    //   console.log(this.flight)
      
    // },
    // error => console.log(error));
  }


  onSearch(){
    this.flightService.getAvailableFlights(this.flight.origin, this.flight.destination, this.flight.flightdate ).subscribe( data =>{
      this.flights = data;
      console.log(this.flights);
      
      //this.router.navigate(['/flight-list'])
    }, error => console.log(error));
    }
      
      
    }
    




