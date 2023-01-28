import { Flight } from './flight';

import { Passenger } from './passenger';

export class Book {
  flight!: {
    flightId: number | undefined;
    origin: string | undefined;
    destination: string | undefined;
    flightDate: string | undefined;
  };
  // flightNumber: number = Flight.flightId;  // origin: string = Flight.origin;  // destination: string = Flight.destination;  // flightdate: string = Flight.flightdate;
  bookId: number | undefined;
  bookingDate!: string;
  passenger!: Passenger[];
  status!: string;
  totalFare: number|undefined;
}
