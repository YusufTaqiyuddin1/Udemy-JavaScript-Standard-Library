// String
const input = 12345;
const string = String(input);

console.log(typeof(input)); // number
console.log(typeof(string)); // string

// String Instance Method dan Properties
const name1 = "Yusuf Taqiyuddin";
const name2 = "           Yusuf  Taqiyuddin      ";

console.log(name1.length); // 16
console.log(name1.toLowerCase()); // yusuf taqiyuddin
console.log(name1.toUpperCase()); // YUSUF TAQIYUDDIN
console.log(name1.split(" ")); // [ 'Yusuf', 'Taqiyuddin' ]
console.log(name2.trim()); // Yusuf  Taqiyuddin

