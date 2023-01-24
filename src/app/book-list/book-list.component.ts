import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
 @Input() books :Book[];
 book: Book= new Book();
constructor(private bookService:BookServiceService, private router: Router){
  this.books=[];
  this.book

}

ngOnInit(): void {
  console.log(this.books);
  if (this.books.length == 0){
    this.getBookList();
  }
  
}

getBookList(){
  this.bookService.getBookList().subscribe(data=>{
    this.books=data;
    console.log(data); 
    console.log("books");
    console.log(this.books);
    
  })
}

bookDetails(bookId: number|undefined){
this.router.navigate(['/book-details',bookId]);
}

}
