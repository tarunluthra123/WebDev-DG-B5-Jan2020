// We don't want the counter variable to be declared in global
// Only increment function should be able to read and write its value
// counter should not be declared inside increment()

// function increment() {
// 	let counter = 0;
// 	counter++;
// 	return counter;
// }

function incrementGenerator() {
	let counter = 0;

	function increment() {
		counter++;
		return counter;
	}

	return increment;
}

const inc = incrementGenerator();

// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());

// Callbacks
function hi() {
	console.log("hi");
}

function timer(done) {
	setTimeout(() => {
		console.log("Hello");
		done();
	}, 2000);
}

timer(hi);
//tarun.luthra@codingblocks.com
