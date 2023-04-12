function validStringLength(text) {
	if (text.length > 10) {
		console.log("Text too long");
	} else {
		console.log("Text inside the limit");
	}
}

validStringLength("Hello World!");
validStringLength("Technology");
validStringLength("JavaScript");