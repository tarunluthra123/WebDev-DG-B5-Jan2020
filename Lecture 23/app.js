let person = {
	name: "Spiderman",
	age: 25,
	villains: ["Vulture", "Green Goblin"],
	realName: "Peter Parker",
};

// Destructuring
// let name = person.name;
// console.log(name);

// let age = person.age;
// console.log(age);

// let { name, villains, age } = person;
// let { realName } = person;
// console.log(name, age, villains);
// console.log(realName);

let heroes = [
	["Tony Stark", 30],
	["Thor", 1000],
	["Captain America", 85],
	["Spiderman", 20],
];

for (let hero of heroes) {
	// console.log(hero);
	let [name, age] = hero;
	console.log("Name =", name);
	console.log("Age =", age);
}
