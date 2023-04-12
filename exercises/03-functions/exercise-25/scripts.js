function printEven(number) {
	for (let i = number; i >= 0; i--) {
		if (isEven(i)) {
			console.log(`${i}`);
		}
	}
}

function isEven(number) {
	return number % 2 == 0;
}

printEven(23);