export default class Car {
    constructor(private carColor: string, private CarPassengerCount: number) {
        this.CarPassengerCount = CarPassengerCount;
        this.carColor = carColor;
    }
    get color() {
        return this.carColor;
    }
    get passengerCount() {
        return this.CarPassengerCount;
    }
}
