const inputBox = document.getElementById("inputBox");
const btn = document.getElementById("btn");
const mySpan = document.getElementById("mySpan");

btn.onclick = function () {
	let value = inputBox.value;
	mySpan.innerText = value;
};
