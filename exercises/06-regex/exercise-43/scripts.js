let validBrand = /Brand: (Nike|Adidas|Puma|Asics)/;

console.log(validBrand.test("Brand: Nike"));
console.log(validBrand.test("Brand: Adidas"));
console.log(validBrand.test("Brand: Puma"));
console.log(validBrand.test("Brand: Asics"));
console.log(validBrand.test("Brand: Supreme"));
