import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})

export class CreateFlightComponent implements OnInit {
  flight: Flight = new Flight();
  constructor() {}

  ngOnInit(): void {
    
    
  }
  onSubmit(){
    console.log(this.flight);
    //this.saveFlight();
  }


}
