class Car {
	constructor(brand, color, remainingGasoline, gasolineConsumption) {
		this.brand = brand;
		this.color = color;
		this.remainingGasoline = remainingGasoline;
		this.gasolineConsumption = gasolineConsumption;
	}

	toFuel(quantityLiters) {
		this.remainingGasoline += quantityLiters;
	}

	driveCar(distance) {
		this.remainingGasoline -= distance * this.gasolineConsumption;
	}
}

let newCar = new Car("Chevrolet", "White", 20, 0.25);

console.log(newCar);

newCar.driveCar(60);

console.log(newCar);

newCar.toFuel(25);

console.log(newCar);