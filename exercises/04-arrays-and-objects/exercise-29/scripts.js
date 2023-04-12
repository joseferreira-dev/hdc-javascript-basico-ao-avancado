let bus = {
	wheels: 8,
	passengers: 40,
	doors: 2
}

bus.windows = 20;

delete bus.wheels;

console.log(`Number of windows = ${bus.windows}`);