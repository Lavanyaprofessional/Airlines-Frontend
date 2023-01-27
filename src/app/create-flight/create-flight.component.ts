import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightServiceService } from '../services/flight-service.service'
import { Router } from '@angular/router';
//import { DatePipe } from '@angular/common';
import { AbstractControl, AbstractControlOptions, ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { group } from '@angular/animations';
//import { formValidation } from '../crossfield.validation';


@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})

export class CreateFlightComponent implements OnInit {
form!: FormGroup;
flight: Flight ={
  flightId:0,
  origin: "",
  destination: "",
  flightdate:  "",
  fare: {
      fareId: 0,
      fare: "",
      currency: "",
  },
  inventory: {
      id: 0,
      
  }
}
// fromToForm=this.formBuilder.group({
//   from:this.flight.origin,
//   to:this.flight.destination
//   },{Validators: formValidation});


currentDate:any=new Date();

  constructor(private flightService: FlightServiceService, private router: Router,private formBuilder:FormBuilder) {
    
  }
  
 

  ngOnInit(): void {   
    this.form=this.formBuilder.group({    
      "origin":this.flight.origin,
      "destination": this.flight.destination
    }
    ,
    {
      Validators: this.validateCrossfield
    });
    console.log(origin);
    
  }

  validateCrossfield (group:FormGroup){
    var ori= group.controls['origin'];
    var dest= group.controls['destination'];
    console.log("crossfieldvalidate function is called");
    

    if(ori.value === dest.value){
      dest.setErrors({validateCrossfield:true});
    }
    return null;
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
    alert("Flight created successfully!")
    this.saveFlight();
  }

  
}
