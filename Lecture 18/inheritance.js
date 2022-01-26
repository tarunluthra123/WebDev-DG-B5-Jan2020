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

class Avenger extends Superhero {
	constructor(name, age, villains, species) {
		super(name, age, villains);
		this.species = species;
	}
}

class Guardian extends Superhero {
	constructor(name, age, villains) {
		super(name, age, villains);
	}

	fly() {
		this.fight();
		console.log(this.name + " is flying");
	}
}

let thor = new Avenger("Thor", 1000, ["Gorr", "Surtur"], "Asgardian");
console.log(thor);

thor.fight();
thor.speak("Hello there !");

let starlord = new Guardian("Starlord", 20, ["Ronin"]);
starlord.fly();
