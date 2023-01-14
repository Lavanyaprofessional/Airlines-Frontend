export class Flight {
    flightId: number | undefined
    origin: string | undefined
    destination: string | undefined
    flightdate: string | undefined
    fare: {
        fareId?: number
        fare: string
        currency: string
    }
    inventory!: {
        id?: number
        count: number
    }

    constructor(){
        this.fare={
            fareId:0,
            fare:"",
            currency:"",
        },
        this.inventory={
            id:0,
            count:0
        }

    }
}



