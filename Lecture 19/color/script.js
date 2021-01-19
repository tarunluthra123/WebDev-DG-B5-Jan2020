const colorInput = document.getElementById("colorInput");
const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.onclick = function () {
	const value = colorInput.value;
	// console.log(value);
	box.style.backgroundColor = value;
};
