// JSON
const person = {
    firstName: "Yusuf",
    lastName: "Taqiyuddin",
    address: {
        country: "Indonesia",
        city: "Semarang"
    },
    hobbies: [
        "Rebahan", "Main Game", "Nonton Doraemon"
    ]
};

const json = JSON.stringify(person);
const personAgain = JSON.parse(json);

console.log(json);
console.log(personAgain);