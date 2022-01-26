let arr = [4, 5, 7, 2, 9, 1];

// let squares = [];

// for (let i = 0; i < arr.length; i++) {
// 	squares.push(arr[i] * arr[i]);
// }

// console.log(squares);
let squares = arr.map((x) => {
	return x * x;
});

console.log(squares);
console.log(arr);
