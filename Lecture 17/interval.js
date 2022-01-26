let counter = 1;

let intervalId = setInterval(() => {
	console.log("Hello", counter);
	++counter;
	if (counter > 10) {
		clearInterval(intervalId);
	}
}, 1000);
