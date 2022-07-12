{

    // Object Freeze

    const person = {
        firstName: "Yusuf",
        lastName: "Taqiyuddin"
    };

    Object.freeze(person);

    person.firstName = "ucup"; // tidak berubah
    delete person.firstName; // tidak berubah
    
    console.log(person);

}

{

    // Object Seal

    const person = {
        firstName: "Yusuf",
        lastName: "Taqiyuddin"
    };

    Object.seal(person);

    person.firstName = "Ucup"; // firstName: "Ucup"
    person.middleName = "Udin"; // tidak berubah
    delete person.firstName; // tidak berubah

    console.log(person.firstName); // Ucup

}

{

    // Object Assign

    const target = {firstName: "Yusuf"};
    const source = {lastName: "Taqiyuddin"};

    Object.assign(target, source);
    console.log(`${target.firstName} ${target.lastName}`); // Yusuf Taqiyuddin

}

{
  // Object Property Name & Value

  const person = {
    firstName: "Yusuf",
    lastName: "Taqiyuddin",
  };

  console.log(Object.values(person)); // [ 'Yusuf', 'Taqiyuddin' ]
  console.log(Object.getOwnPropertyNames(person)); // [ 'firstName', 'lastName' ]
  
}