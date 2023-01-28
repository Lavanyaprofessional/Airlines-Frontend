export class Flight {
    flightId: number | undefined
    origin: string | undefined
    destination: string | undefined
    flightDate: string | undefined
    fare!: {
        fareId?: number
        fare: string
        currency: string
    }
    inventory!: {
        id?: number
        count?: number
    }
    static flightId: number
    static origin: string
    static destination: string
    static flightDate: string

    constructor(){
        // this.fare={
        //     fareId:,
        //     fare:"",
        //     currency:"",
        // },
        // this.inventory={
        //     id:0,
        //     count:0
        // }

    }
}



