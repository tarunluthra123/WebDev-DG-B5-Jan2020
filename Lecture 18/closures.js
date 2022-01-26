// function increment() {
// 	let counter = 0; //Should be executed only once
// 	counter++;
// 	return counter;
// }

// counter must only be read and updated through the increment function
// counter must be declared outside increment
// counter must not be global

function incrementGenerator() {
	let counter = 0; //Should be executed only once
	function increment() {
		counter++;
		return counter;
	}
	return increment;
}

const increment = incrementGenerator();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
