function randomNumber(maxNumber) {
	return Math.round(Math.random() * maxNumber);
}

console.log(`Random number: ${randomNumber(100)}`);