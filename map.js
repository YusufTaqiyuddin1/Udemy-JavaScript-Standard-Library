// Map

const map = new Map();
map.set("Name", "Yusuf Taqiyuiddin");
map.set("Address", "Indonesia");

console.log(map); // Map(2) { 'Name' => 'Yusuf Taqiyuiddin', 'Address' => 'Indonesia' }
console.log(map.get("Name")); // Yusuf Taqiyuiddin
console.log(map.get("Address")); // Indonesia

for (const element of map) {
  console.log(`${element[0]} : ${element[1]}`);
  /* output:
   Name : Yusuf Taqiyuiddin
   Address: Indonesia; 
   */
}

map.forEach((key, value) => console.log(`${key} : ${value}`));
/* output:
   Name : Yusuf Taqiyuiddin
   Address: Indonesia; 
*/