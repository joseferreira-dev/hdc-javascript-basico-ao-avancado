let validUppercase = /[A-Z]/;

console.log(regex.test("0123456789"));
console.log(regex.test("abcde"));
console.log(regex.test("ABCDE"));
console.log(regex.test("0123abcd"));
console.log(regex.test("0123ABCD"));
console.log(regex.test("abcdABCD"));