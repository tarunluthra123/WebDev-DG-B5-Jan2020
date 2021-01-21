const number = document.getElementsByClassName("number");
const operator = document.getElementsByClassName("operator");
const output = document.getElementById("output");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const equal = document.getElementById("equal");

for (let i = 0; i < number.length; i++) {
	const num = number[i];
	num.onclick = function () {
		output.innerText += num.value;
	};
}

for (let i = 0; i < operator.length; i++) {
	const op = operator[i];
	op.onclick = function () {
		const expression = output.innerText;
		if (expression[expression.length - 1] == op.value) {
			return;
		}
		output.innerText += op.value;
	};
}

clear.onclick = function () {
	output.innerText = "";
};

equal.onclick = function () {
	const expression = output.innerText;
	const result = eval(expression);
	output.innerText = result;
};

backspace.onclick = function () {
	const expression = output.innerText;
	const modified = expression.substring(0, expression.length - 1);
	output.innerText = modified;
};

// let flag = true;

// setInterval(() => {
// 	if (flag) output.style.color = "#969696";
// 	else output.style.color = "black";
// 	flag = !flag;
// }, 500);
