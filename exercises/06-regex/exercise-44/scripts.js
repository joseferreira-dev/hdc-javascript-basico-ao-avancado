let validIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validIp.test("127.0.0.1"));
console.log(validIp.test("192.25.0.1"));
console.log(validIp.test("192.66.1"));
console.log(validIp.test("IP"));
