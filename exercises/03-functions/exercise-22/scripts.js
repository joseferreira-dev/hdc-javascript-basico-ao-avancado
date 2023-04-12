function negativeToPositive(number) {
	return Math.abs(number);
}

console.log(negativeToPositive(-5));
console.log(negativeToPositive(4));
console.log(negativeToPositive(-8.54));
console.log(negativeToPositive(21.5));
console.log(negativeToPositive(-Infinity));
console.log(negativeToPositive(Infinity));