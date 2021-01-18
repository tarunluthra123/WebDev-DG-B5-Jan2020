let arr = [1, 5, 3, 8, 7, 4, 2];
console.log(arr);
// let odd = [];
// let even = [];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 == 0) {
// 		even.push(arr[i]);
// 	} else {
// 		odd.push(arr[i]);
// 	}
// }

// console.log(odd);
// console.log(even);

let even = arr.filter(function (x) {
	if (x % 2 == 0) {
		return true;
	} else {
		return false;
	}
	// return x % 2 == 0;
});

let odd = arr.filter(function (x) {
	return x % 2 == 1;
});

console.log(even);
console.log(odd);
