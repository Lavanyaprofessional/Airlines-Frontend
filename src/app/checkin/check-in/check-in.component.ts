import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { Checkin } from 'src/app/checkin';
import { Passenger } from 'src/app/passenger';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  passenger:Passenger[]=[]
  book:Book=new Book();
  books:Book[];
  checkin: Checkin={
    id: 0,
	  seatNumber:"",
	  checkInTime: "",
    
        bookingId:0,
        flightNumber: 0,
        flightDate:"",
        lastName:"",
        firstName:""
    
  }
  checkins:Checkin[];
  constructor(private checkInService:CheckinService,
    private bookService: BookServiceService){
    this.checkins=[]
    this.books=[]
  }

  ngOnInit(): void {
    
  }
  
  private saveCheckin(){
    this.bookService.getCheckInDetailsToSaveCheckInData(this.checkin.firstName,this.checkin.lastName,this.checkin.flightNumber,this.checkin.flightDate,this.checkin.bookingId).subscribe(data=>{     
      this.checkins=data;
      console.log(this.checkins);
      // this.addCheckInDetails();
    },error=>console.log(error))
  }

  onSubmit(){
    this.saveCheckin();
    // this.addCheckInDetails()
  }
}
