let person = {
	name: {
		first: "Peter",
		last: "Parker",
	},
	age: 25,
	villains: ["Venom", "Doc Ock", "Kingpin"],
	speak: function (dialogue) {
		console.log(dialogue);
	},
};

console.log(person.name);
console.log(person.name.first);
console.log(person.name.last);
console.log(person.age);
console.log(person.villains[1]);

person.name = "Peter Parker";

console.log(person);

person.girlfriend = "Mary Jane Watson";
console.log(person);

console.log(person.name);
console.log(person["age"]); //Same as person.age

person.speak("With great powers comes great responsibilies.");
