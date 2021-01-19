class Superhero {
	constructor(name, age, villains) {
		this.name = name;
		this.age = age;
		this.villains = villains;
	}

	speak(dialogue) {
		console.log(dialogue);
	}

	fight() {
		console.log(this.name + " is fighting " + this.villains[0]);
	}
}

let spiderman = new Superhero("Spiderman", 25, [
	"Kingpin",
	"Vulture",
	"Green Goblin",
]);

spiderman.fight();

console.log(spiderman);

let batman = new Superhero("Batman", 30, ["Joker", "Red Hood"]);
console.log(batman);
