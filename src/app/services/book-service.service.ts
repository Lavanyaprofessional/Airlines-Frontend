import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  book: Book[];
  ret : any;

 private baseURL="http://localhost:8082/"

  constructor(private httpclient:HttpClient) { 
    this.book=[]
  }

  getBookList():Observable<Book[]>{
    return this.httpclient.get<Book[]>(`${this.baseURL+"bookings"}`);

  }

  getBookByBookId(bookId:number|undefined):Observable<Book>{
    return this.httpclient.get<Book>(`${this.baseURL+"bookings"}/${bookId}`);

  }

  saveBook(book:Book){
    return this.httpclient.post<Book>(`${this.baseURL+"bookings"}`,book);
  }
}
