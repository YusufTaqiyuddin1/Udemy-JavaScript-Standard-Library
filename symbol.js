// Symbol

const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "Yusuf";
person[lastName] = "Taqiyuddin";

console.log(person); // { [Symbol()]: 'Yusuf', [Symbol()]: 'Taqiyuddin' }
console.log(person[firstName]); // Yusuf