function isNumber(data) {
	if (typeof data == "number") {
		return true;
	} else {
		return false;
	}
}

function isString(data) {
	if (typeof data == "string") {
		return true;
	} else {
		return false;
	}
}

function isBoolean(data) {
	if (typeof data == "boolean") {
		return true;
	} else {
		return false;
	}
}

function checkDataType(data) {
	if (isNumber(data) == true) {
		console.log(`${data} is a Number`);
	} else if (isString(data) == true) {
		console.log(`${data} is a String`);
	} else if (isBoolean(data) == true) {
		console.log(`${data} is a Boolean`);
	} else {
		console.log(`${data} is not a Number, a String or a Boolean`);
	}
}

checkDataType(52.33);
checkDataType("Apple");
checkDataType(true);
checkDataType(undefined);