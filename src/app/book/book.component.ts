import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Flight } from '../flight';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {

  flightId:number|undefined;
  flight= new Flight;
  
  public show:boolean = false;


  constructor( private flightService: FlightServiceService, private router: Router, private route:ActivatedRoute){


  }

  ngOnInit(): void{

    this.flightId= this.route.snapshot.params['flightId'];
    this.flightService.getFlightByFlightId(this.flightId).subscribe(data => {
      this.flight = data;
      console.log(this.flight);
    }, error => console.log(error));
    
    
  }

    toggle(){
      this.show = !this.show;  
    }

    passengerDetails(){
      this.router.navigate(['passenger-details'])
    }


  

}
