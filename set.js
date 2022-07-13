// Set
const set = new Set();

set.add("Yusuf");
set.add("Yusuf");
set.add("Taqiyuddin");

console.log(set); // Set(2) { 'Yusuf', 'Taqiyuddin' }
set.forEach(value => console.log(value));
/* output
Yusuf
Taqiyuddin
*/