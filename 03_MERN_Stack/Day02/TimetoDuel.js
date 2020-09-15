//  Make an instance of Unit called "Red Belt Ninja"
//  Make an instance of Unit called "Black Belt Ninja"
//  Make an instance of Effect called "Hard Algorithm"
//  Make an instance of Effect called "Unhandled Promise Rejection"
//  Make an instance of Effect called "Pair Programming"
//  Play out the scenario described above


class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, def) {
        super(name, cost);
        this.power = power;
        this.def = def;
    }
    attack(target) {
        target.def -= this.power;
        return console.log(`After attack ${target.name}'s defense reduced to ${target.def}`);
    }
    
}
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "power"){
                target.power += this.magnitude;
            } else if(this.stat == "defense"){
                target.def += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

var redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(redBeltNinja);
var blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
console.log(blackBeltNinja);

var hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's defense by 3", "defense", 3);
var unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduces target's defense by 2", "defense", -2)
var pairProgramming = new Effect("Pair Programming", 3, "increase targets power by 2", "power", 2)


hardAlgorithm.play(redBeltNinja);
// console.log(redBeltNinja);

unhandledPromiseRejection.play(redBeltNinja);
// console.log(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
// console.log(blackBeltNinja);

// redBeltNinja.attack(blackBeltNinja);
// redBeltNinja.attack(blackBeltNinja);
// redBeltNinja.attack(blackBeltNinja);
// redBeltNinja.attack(blackBeltNinja);

// hardAlgorithm.play(pairProgramming);



