import assert from 'assert';
import Car from '../carClass';
import Ferry from '../ferryClass';

describe('The Ferry Kata tests', function () {
    it('should contain a car class', function () {
        let car = new Car('Black', 7);
        assert.equal(car.color, 'Black');
        assert.equal(car.passengerCount, 7);
    });
    it('Should  be able to create a farry that takes 5 cars', function () {
        let ferry = new Ferry(5, 20);

        assert.equal(ferry.carCount, 5);
        assert.equal(ferry.passengerCount, 20);
    });
    it('Should return accepted if there is still space for more cars/people on the ferry', function () {
        let ferry = new Ferry(3, 12);
        let car = new Car('Black', 4);

        assert.equal(ferry.board(car), 'accepted');
        assert.equal(ferry.board(car), 'accepted');
        assert.equal(ferry.board(car), 'accepted');
    });
    it('Should return rejected if there is nospace for more cars/people on the ferry', function () {
        let ferry = new Ferry(2, 8);
        let car1 = new Car('Black', 4);
        let car2 = new Car('White', 3);
        let car3 = new Car('Green', 2);

        assert.equal(ferry.board(car1), 'accepted');
        assert.equal(ferry.board(car2), 'accepted');
        assert.equal(ferry.board(car3), 'rejected');
    });
    it('Should keep track of how many people and cars there are inside a Ferry', function () {
        let ferry = new Ferry(4, 12);
        let car1 = new Car('Black', 4);
        let car2 = new Car('White', 3);
        let car3 = new Car('Green', 2);

        ferry.board(car1);
        ferry.board(car2);
        ferry.board(car3);

        assert.equal(ferry.currentPassengerCount, 9);
        assert.equal(ferry.currentCarCount, 3);

    });
});