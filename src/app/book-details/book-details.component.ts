import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { Flight } from '../flight';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  // flight:Flight=new Flight();
 book : Book=new Book();
 bookId:number|undefined;


  constructor(private bookService:BookServiceService, private route:ActivatedRoute){
   

  }

  ngOnInit(): void {
    this.bookId=this.route.snapshot.params['bookId'],
    this.bookService.getBookByBookId(this.bookId).subscribe(data=>{
      this.book=data;
      console.log(this.book);
            
    },error=> console.log(error));
  }
}
