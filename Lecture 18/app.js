let counter = 0; // global variable
function increment() {
	counter++;
	return counter;
}

console.log(increment());
console.log(increment());
console.log(increment());

counter = 500;

console.log(increment());
console.log(increment());
console.log(increment());
