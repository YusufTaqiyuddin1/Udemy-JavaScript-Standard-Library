// RegExp Instace Method

const name = "Yusuf Taqiyuddin";
const regex = /Yusuf/;

const result = regex.exec(name);
console.log(result);
// [ 'Yusuf', index: 0, input: 'Yusuf Taqiyuddin', groups: undefined ]

const test = regex.test(name);
console.log(test);
// true