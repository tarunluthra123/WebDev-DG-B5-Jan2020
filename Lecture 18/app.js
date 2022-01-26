let counter = 0; // global variable
// It must be declared outside counter
function increment() {
	counter++;
	return counter;
}

//counter must only be read and updated through the increment function

console.log(increment());
console.log(increment());
console.log(increment());

counter = 500;

console.log(increment());
console.log(increment());
console.log(increment());
