// Symbol For

const person = {};

person[Symbol.for("firstName")] = "Yusuf";
person[Symbol.for("lastName")] = "Taqiyuddin";

console.log(person); // { [Symbol(firstName)]: 'Yusuf', [Symbol(lastName)]: 'Taqiyuddin' }
console.log(person[Symbol.for("firstName")]); // Yusuf