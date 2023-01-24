import { Flight } from './flight';

import { Passenger } from './passenger';

export class Book {
  flightId: number = Flight.flightId;
  origin: string = Flight.origin;
  destination: string = Flight.destination;
  flightdate: string = Flight.flightdate;
  bookId: number | undefined;
  bookingDate!: string;
  fare!: {
    fare: string;
  };
  status!: string;
  passenger!: Passenger;
  available!: string;
}
