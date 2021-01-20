const inputBox = document.getElementById("inputBox");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.onclick = function () {
	const newTask = inputBox.value;
	if (newTask == "") {
		alert("You need to give a task.");
		return;
	}

	inputBox.value = "";

	const listItem = document.createElement("li");
	const crossBtn = document.createElement("button");
	const upBtn = document.createElement("button");

	crossBtn.innerText = "X";
	upBtn.innerText = "↑";

	// We want that when the user clicks on this crossBtn, the listItem should be removed

	crossBtn.onclick = function () {
		listItem.remove();
	};

	upBtn.onclick = function () {
		taskList.insertBefore(listItem, listItem.previousElementSibling);
	};

	listItem.append(crossBtn);
	listItem.append(upBtn);

	listItem.append(newTask);

	taskList.append(listItem);
};
