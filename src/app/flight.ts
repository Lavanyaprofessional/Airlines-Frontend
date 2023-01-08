export class Flight {
    flightId: number | undefined
    origin: string | undefined
    destination: string | undefined
    flightdate: string | undefined
    fare!: {
        fareId?: number
        fare: string
        currency: string
    }
    inventory!: {
        id?: number
        count: number
    }
}



