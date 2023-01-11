import { Flight } from "./flight"
import { Passenger } from "./passenger";

export class Book {
    flight!:Flight;
    bookingDate !: Date;
    fare!:{
        fare: string;
    }
    status !: string;
    passenger !: Passenger;
    available !:string;
}
