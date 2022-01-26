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
	const downBtn = document.createElement("button");

	crossBtn.innerText = "X";
	upBtn.innerText = "↑";
	downBtn.innerText = "↓";

	// Assign classes for CSS
	listItem.classList.add("task");
	crossBtn.classList.add("crossBtn");
	upBtn.classList.add("upBtn");
	downBtn.classList.add("downBtn");

	// We want that when the user clicks on this crossBtn, the listItem should be removed
	crossBtn.onclick = function () {
		listItem.remove();
	};

	// listItem should be moved up when user clicks on up button
	upBtn.onclick = function () {
		taskList.insertBefore(listItem, listItem.previousElementSibling);
	};

	downBtn.onclick = function () {
		taskList.insertBefore(listItem.nextElementSibling, listItem);
	};

	listItem.append(crossBtn);
	listItem.append(upBtn);
	listItem.append(downBtn);

	listItem.append(newTask);

	taskList.append(listItem);
};
