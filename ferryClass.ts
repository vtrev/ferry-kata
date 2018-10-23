export default class Ferry {

    constructor(private FerryCarCount: number, private FerryPassengerCount: number) {
        this.FerryCarCount = FerryCarCount;
        this.FerryPassengerCount = FerryPassengerCount;
    }

    private carCounter = 0;
    private passengerCounter = 0;

    board(car: Car) {
        if ((car.passengerCount + this.passengerCounter <= this.FerryPassengerCount) && (this.carCounter + 1 <= this.FerryCarCount)) {
            //allow car to bord
            this.carCounter++
            this.passengerCounter += car.passengerCount
            return 'accepted'
        } else {
            return 'rejected'
        }
    }
    get carCount() {
        return this.FerryCarCount;
    }
    get passengerCount() {
        return this.FerryPassengerCount;
    }
    get currentCarCount() {
        return this.carCounter;
    }
    get currentPassengerCount() {
        return this.passengerCounter
    }

}



