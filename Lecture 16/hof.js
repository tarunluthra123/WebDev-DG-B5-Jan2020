function formalGreeting() {
	console.log("Hello, How are you ?");
}

function informalGreeting() {
	console.log("Hey ! What's up ? ");
}

//Higher order function - it accepts two functions as arguments
function greet(type, formal, informal) {
	if (type == "formal") {
		formal();
	} else {
		informal();
	}
}

greet("formal", formalGreeting, informalGreeting);
greet("informal", formalGreeting, informalGreeting);
