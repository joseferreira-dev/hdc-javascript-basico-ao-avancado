let countries = ['Brazil', 'USA'];
let continents = ['America', 'Europe', 'Asia', 'Africa', 'Oceania', 'Antarctica'];

function checkNumberOfElements (arr) {
	let limit = 5;
	if (arr.length < 5) {
		console.log(`The array has ${arr.length} elements... few elements`);
	} else if (arr.length > 5) {
		console.log(`The array has ${arr.length} elements... many elements`);
	} else {
		console.log(`The array has ${arr.length} elements... perfect amount of elements`);
	}
}

checkNumberOfElements(countries);
checkNumberOfElements(continents);