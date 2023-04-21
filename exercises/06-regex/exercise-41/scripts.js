let validUppercase = /[A-Z]/;

console.log(validUppercase.test("0123456789"));
console.log(validUppercase.test("abcde"));
console.log(validUppercase.test("ABCDE"));
console.log(validUppercase.test("0123abcd"));
console.log(validUppercase.test("0123ABCD"));
console.log(validUppercase.test("abcdABCD"));