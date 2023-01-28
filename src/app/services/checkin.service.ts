import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { Checkin } from '../checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  checkin: Checkin[];

  private baseURL="http://localhost:8070/check/";

  constructor(private httpClient: HttpClient) {
    this.checkin=[];
   }

getCheckInById(id:number|undefined):Observable<Checkin>{
  return this.httpClient.get<Checkin>(`${this.baseURL+"allCheckins"}/${id}`);
}

addCheckIn(checkin:Checkin){
  return this.httpClient.post<Checkin>(`${this.baseURL+"addCheckin"}`,checkin)

}

// getCheckInDetailsToSaveCheckInData(firstName:string|undefined, lastName:string|undefined,flightNumber:number|undefined,flightDate: string|undefined,bookingId:number|undefined):Observable<Checkin[]>{
//   return this.httpClient.get<Checkin[]>(`${this.baseURL+"bookings/cnfCheckIn"}/${firstName}/${lastName}/${flightNumber}/${flightDate}/${bookingId}`);

// }
}
