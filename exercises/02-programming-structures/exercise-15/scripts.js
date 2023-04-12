let number = 9;

for (let i = number - 1; i >= 1; i--) {
	if (number % i == 0 && i != 1) {
		console.log(`${number} is not a prime number`);
		break;
	} else {
		if (i == 1) {
			console.log(`${number} is a prime number`);
		}
	}
}