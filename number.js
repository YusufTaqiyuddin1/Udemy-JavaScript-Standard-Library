// Number
const input = "12345";
const number = Number(input);

console.log(typeof(input)); // string
console.log(typeof(number)); // number

// Number Static Properties
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Number Static Method
const data = Number("12345");

console.log(Number.isInteger(data)); // true
console.log(Number.isNaN(data)); // false

// Number Instance Method
const value = Number(12345);

console.log(value.toString(2)); // 11000000111001
console.log(value.toLocaleString("id-ID")); // 12.345