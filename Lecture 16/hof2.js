//It returns another function
function generateHelloSayer() {
	function sayHello() {
		console.log("Hello");
	}
	return sayHello;
}

const helloSayer = generateHelloSayer();
// Implicitly equivalant to
// const helloSayer = function() {
// 	                    console.log("Hello");
//                    };
helloSayer();
helloSayer();
helloSayer();
