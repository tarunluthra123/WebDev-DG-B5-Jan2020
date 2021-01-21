const box = document.getElementById("box");
const inputBox = document.getElementById("inputBox");

box.addEventListener("click", function (event) {
	console.log("Hello");
});

window.addEventListener("resize", function (event) {
	box.style.fontSize = "50px";
});

window.addEventListener("scroll", function (event) {
	box.style.color = "blue";
});

inputBox.addEventListener("keydown", function (event) {
	if (event.code == "Enter") {
		// Keycode of enter key is 13
		const value = inputBox.value;
		alert(value);
	}
});

box.addEventListener("mouseover", function (event) {
	console.log(event);
});
