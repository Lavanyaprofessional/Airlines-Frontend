import { Component, OnInit, Input } from '@angular/core';

import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { Passenger } from '../passenger';

import { BookServiceService } from '../services/book-service.service';

import { ActivatedRoute, Router } from '@angular/router';

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

  passengers: Passenger[] =[];

  book: Book = {
    flight : Flight,
    bookId: 0,
    bookingDate: '',
    passenger: this.passengers
  };

  

   flight:Flight;

  constructor(
    private bookservice: BookServiceService,
    private router: Router,
    private route:ActivatedRoute
  ) {

    this.flight=JSON.parse(this.route.snapshot.paramMap.get('Flight')!)
  }

  ngOnInit(): void {
    this.passenger = new Passenger();
    this.passengers.push(this.passenger);
    console.log(this.flight);
    
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
    this.book.flight= this.flight;
    console.log(this.book);
    
    this.bookservice.saveBook(this.flight,this.passengers).subscribe((data) => {
      console.log(this.book);
      console.log(data);
      this.book = new Book();
      this.router.navigate(['/book-details',this.book,this.passengers])
    });
  }
}
