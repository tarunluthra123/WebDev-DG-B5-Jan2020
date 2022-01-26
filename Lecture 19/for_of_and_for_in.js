let arr = [2, 6, 5, 4, 8, 9];

// for (let i = 0; i < arr.length; i++){
// 	console.log(arr[i]);
// }

// for-of loop - lets you iterate over the elements of an array or a string
for (let value of arr) {
	console.log(value);
}

console.log();

let hello = "Hellothere";
for (let char of hello) {
	console.log(char);
}

// for-in loop - used to iterate over the object properties
let person = {
	name: "Spiderman",
	age: 25,
	villains: ["Vulture", "Kingpin"],
};

for (let prop in person) {
	console.log(prop, person[prop]);
}

// Experimental

// When you use for-in loop with an array, the variable takes the indices of the array
for (let i in arr) {
	console.log(i);
}

// This does not work
// We cannot use for-of loops with an object
// for (let x of person) {
// 	console.log(x);
// }
