let age = 22;
let hasDriverLicense = false;

if (age >= 18 && hasDriverLicense == false) {
	console.log("You are not qualified to drive because you don't have a driver's license");
} else if (age >= 18 && hasDriverLicense == true) {
	console.log("You are qualified to drive because you are over 18 years old and have a driver's license");
} else {
	console.log("You are not qualified to drive because you are under 18 years old and don't have a driver's license");
}