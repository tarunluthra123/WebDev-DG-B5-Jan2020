// Async function
function timer(done) {
	setTimeout(() => {
		console.log("Timeout of 3 seconds");
		done();
	}, 3000);
}

function hello() {
	console.log("Hello World");
}

timer(hello);

// I want to print hello world after timeout of 3 seconds
