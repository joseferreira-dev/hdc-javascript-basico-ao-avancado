let validUser = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validUser.test("matheus_123"));
console.log(validUser.test("Joseferreira"));
console.log(validUser.test("jose2508_3"));
console.log(validUser.test("JOSE121098"));
