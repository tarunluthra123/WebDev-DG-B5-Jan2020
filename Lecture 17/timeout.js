function helloSayer() {
	console.log("Hello");
}

setTimeout(() => {
	console.log("5 seconds have passed");
}, 5000);

setTimeout(function () {
	console.log("4 seconds have passed");
}, 4000);

setTimeout(() => {
	console.log("3 seconds have passed");
}, 3000);

setTimeout(() => {
	console.log("2 seconds have passed");
}, 2000);

setTimeout(() => {
	console.log("1 seconds have passed");
}, 1000);
