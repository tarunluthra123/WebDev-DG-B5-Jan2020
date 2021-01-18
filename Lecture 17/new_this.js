function Superhero(name, age, villains) {
	this.name = name;
	this.age = age;
	this.villains = villains;
}

// this = calling object

// Superhero("Spiderman", 25, ["Vulture", "Kingpin"]);

let spiderman = new Superhero("Spiderman", 25, ["Vulture", "Kingpin"]);
let batman = new Superhero("Batman", 30, ["Joker", "Penguin", "Scarecrow"]);

//spiderman and batman are instances of Superhero

console.log(spiderman);
console.log(batman);
