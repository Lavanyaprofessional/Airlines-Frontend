import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { Checkin } from '../checkin';
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
      "flightDate":flight.flightDate,
      "passenger":passengers
    }
    console.log(body);
    return this.httpclient.post<Book>(`${this.baseURL+"bookings"}`,body);
  }

  getCheckInDetailsToSaveCheckInData(firstName:string|undefined, lastName:string|undefined,flightNumber:number|undefined,flightDate: string|undefined,bookingId:number|undefined):Observable<Checkin[]>{
    return this.httpclient.get<Checkin[]>(`${this.baseURL+"bookings/cnfCheckIn"}/${firstName}/${lastName}/${flightNumber}/${flightDate}/${bookingId}`);
  
  }
}
