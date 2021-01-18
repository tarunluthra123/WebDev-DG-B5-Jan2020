let arr = [1, 3, 5, 6, "hello", 4.5, [0, 6]];

// console.log(arr);

// console.log(arr[2]);

// console.log(arr[6]);
// console.log(arr[6][0]);

let animals = ["Tiger", "Lion", "Deer", "Crow", "Eagle", "Elephant", "Hyena"];
// console.log(animals);

// animals.push("Cow");
// console.log(animals);

// animals.pop();
// animals.pop();
console.log(animals);

animals.shift();
console.log(animals);

animals.unshift("Dog");

console.log(animals);

console.log(animals.length);

// animals.sort();
console.log(animals);

let birds = animals.splice(3, 2);
console.log(birds);
console.log(animals);
