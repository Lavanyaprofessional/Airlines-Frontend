import { Component, OnInit, Input } from '@angular/core';

import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { Passenger } from '../passenger';

import { BookServiceService } from '../services/book-service.service';

import { Router } from '@angular/router';

import { Book } from '../book';

import { Flight } from '../flight';

@Component({
  selector: 'app-passenger-details',

  templateUrl: './passenger-details.component.html',

  styleUrls: ['./passenger-details.component.css'],
})
export class PassengerDetailsComponent implements OnInit {
  passenger: Passenger = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
  };

  book: Book = {
    flightId: 0,
    origin: '',
    destination: '',
    flightdate: '',
    bookId: 0,
    bookingDate: '',
    fare: {
      fare: '',
    },
    status: '',
    passenger: {
      id: 0,
      firstName: '',
      lastName: '',
      gender: '',
    },
    available: '',
  };

  passengers: any = [];

  //index:any;

  //passengersForm!: FormGroup;

  constructor(
    private bookservice: BookServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passenger = new Passenger();
    this.passengers.push(this.passenger);
  }

  addForm() {
    this.passenger = new Passenger();
    this.passengers.push(this.passenger);
  }

  removeForm(index: number) {
    this.passengers.splice(index);
  }

  onSubmit() {
    console.log(this.passengers);
  }

  onSave() {
    this.bookservice.saveBook(this.book).subscribe((data) => {
      console.log(data);

      this.passengers = new Passenger();

      this.book = new Book();

      console.log(this.book);
    });
  }
}
