export class Flight {
    flightNumber: string|undefined;
    origin:string|undefined;
    destination: string|undefined;
    flightDate: string|undefined;
    constructor(flightNumber?:string,
                origin?:string,
                destination?: string,
                flightDate?: string){
            this.flightNumber=flightNumber
            this.origin=origin
            this.destination=destination
            this.flightDate=flightDate

        }
}

