{

  // Array Loop

  const array = ["Yusuf", "Taqiyuddin"];

  // cara 1
  array.forEach(function (value, index) {
    console.log(`${index} : ${value}`);
  });

  // cara 2
  array.forEach((value, index) => console.log(`${index} : ${value}`));

  array.forEach((value) => console.log(value));

}

{

    // Array Queue

    const queue = [];

    queue.push("Yusuf");
    queue.push("Taqiyuddin");

    console.log(queue.shift()); // Yusuf
    console.log(queue.shift()); // Taqiyuddin
    console.log(queue.shift()); // undefined

}

{

    // Array Stack
    const stack = [];

    stack.push("Yusuf");
    stack.push("Taqiyuddin");

    console.log(stack.pop()); // Taqiyuddin
    console.log(stack.pop()); // Yusuf
    console.log(stack.pop()); // undefined

}

{

    // Array Search

    const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    console.log(source.find(value => value > 3)); // 4
    console.log(source.findIndex(value => value > 3)) // 3
    console.log(source.includes(7)); // false
    console.log(source.indexOf(5)); // 4
    console.log(source.lastIndexOf(5)); // 9

}

{

    // Array Filter

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(numbers.filter(value => value % 2 === 1)); // 1, 3, 5, 7, 9
    console.log(numbers.filter(value => value % 2 === 0)); // 2, 4, 6, 8, 10

}

{

  // Array Transform

  const names = "Yusuf Taqiyuddin".split(" ");
  console.log(names.map((value) => value.toUpperCase())); // ['YUSUF', 'TAQIYUDDIN']

  const nameReduce = names.reduce((before, value) => before + " " + value);
  console.log(nameReduce); // Yusuf Taqiyuddin

  const nameRight = names.reduceRight((before, value) => before + " " + value);
  console.log(nameRight); // Taqiyuddin Yusuf

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers.reduce((result, value) => result + value)); // 55
  console.log(numbers.reduceRight((result, value) => result + value)); // 55
  
}