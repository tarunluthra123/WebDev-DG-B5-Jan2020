let arr = [4, 5, 7, 2, 9, 1];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }

// console.log(sum);

let sum = arr.reduce(function (accumulatedValue, currentValue) {
	return accumulatedValue + currentValue;
}, 10);

console.log(sum);

//You can leave if you want
//Join the next session at 2 PM
