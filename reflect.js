// Reflect

const person = {};

Reflect.set(person, "firstName", "Yusuf");
Reflect.set(person, "lastName", "Taqiyuddin");

console.log(person);

console.log(Reflect.has(person, 'firstName')); // true
console.log(Reflect.has(person, 'middleName')); // false
