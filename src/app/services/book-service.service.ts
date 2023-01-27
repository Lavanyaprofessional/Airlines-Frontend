import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { Flight } from '../flight';
import { Passenger } from '../passenger';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  book: Book[];
  ret : any;

 private baseURL="http://localhost:8060/book/"

  constructor(private httpclient:HttpClient) { 
    this.book=[]
  }

  getBookList():Observable<Book[]>{
    return this.httpclient.get<Book[]>(`${this.baseURL+"bookings"}`);

  }

  getBookByBookId(bookId:number|undefined):Observable<Book>{
    return this.httpclient.get<Book>(`${this.baseURL+"bookings"}/${bookId}`);

  }

  saveBook(flight:Flight,passengers:Passenger[]){
    let body= {
    "flightNumber":flight.flightId,
	  "origin":flight.origin,
	  "destination":flight.destination,
	  "flightDate":flight.flightdate,
	  "passenger":passengers
    }
  console.log(body);
  

    return this.httpclient.post<Book>(`${this.baseURL+"bookings"}`,body);
  }
}
