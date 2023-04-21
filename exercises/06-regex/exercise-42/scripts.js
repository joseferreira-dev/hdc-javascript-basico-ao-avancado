let validId = /\d+ID$/;

console.log(validId.test("0123"));
console.log(validId.test("abcde"));
console.log(validId.test("ABCDE"));
console.log(validId.test("0123ID"));
console.log(validId.test("0123id"));
console.log(validId.test("ID0123"));