const inputBox = document.getElementById("inputBox");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.onclick = function () {
	const value = inputBox.value;

	inputBox.value = "";

	const newListItem = document.createElement("li");
	newListItem.innerText = value;

	list.append(newListItem);
};
