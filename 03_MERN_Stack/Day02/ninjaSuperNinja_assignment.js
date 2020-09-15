// 1-create a Ninja class  
// 2-add attributes: name, health, speed(default value- 3), strength(default value-3)
// 3-add methods: sayName(this logs Ninjas name to console), showStats (shows Ninja name, strength, speed, and health), drinkSake (should add +10 health to Ninja)



class Ninja {
    constructor(name, health = 0, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Ninjas Name: ${this.name}`);
    }

    showStats() {
        console.log(`Ninjas Name: ${this.name}`);
        console.log(`Ninjas Strength: ${this.strength}`);
        console.log(`Ninjas Speed: ${this.speed}`);
        console.log(`Ninjas Health: ${this.health}`);
    }

    drinkSake() {
        console.log(`${this.name}'s health value is ${this.health} but drank Sake.`);
        this.health += 10;
        console.log('********************');
        console.log(`${this.name} added ${this.health} to his health.`);
        this.showStats();
        console.log('********************');
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name);        
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }
    
    speakWisdom(){                       //NEED TO FIX THE THIS.HEALTH FOR SENSEI...THE FLOW ISN'T TAKING IN THE DEFAULT VALUE OF 200. AFTER SAKE, ITS INCREASING BY 210 NOT 10

        console.log("Victory is sweetest when you've known defeat")
    }
}


const ninja1 = new Ninja("Fujibayashi Nagato");
const superSensei = new Sensei("Obi Wan Kenobi")
// ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
superSensei.drinkSake();
superSensei.speakWisdom();





// /////////////////////////////////////////////////////////////////////////////////////////////////////////// from SchneiderBertrand
// // Ninja
// // Example Outputs
// // const ninja1 = new Ninja("Hyabusa");
// // ninja1.sayName();
// // ninja1.showStats();
// //  Create a Ninja class
// //  add an attribute: name
// //  add an attribute: health
// //  add a attribute: speed - give a default value of 3
// //  add a attribute: strength - give a default value of 3
// //  add a method: sayName() - This should log that Ninja's name to the console
// //  add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
// //  add a method: drinkSake() - This should add +10 Health to the Ninja



// class Ninja {
//     constructor(name, health, speed =3, strength =3) {
//         this.name = name;
//         this.health = health;
//         this.speed = speed;
//         this.strength = strength;
//     }

//     sayName() {
//         console.log(`Name: ${this.name}`)
//     }

//     showStats() {
//         console.log(`Ninja: ${this.name} | Strength: ${this.strength} | Speed: ${this.speed} | Health: ${this.health}`)
//     }

//     drinkSake() {
//         console.log(`Ninja ${this.name} is drinking Sake. Current health: ${this.health}`)
//         this.health += 10
//         console.log(`Ninja ${this.name} has been healed by the magic of sake... only by 10hp. New health: ${this.health}`)
//         this.showStats();
//     }
// }

// const ninjaMirasaki = new Ninja('Mirasaki', 90, 9)

// ninjaMirasaki.showStats();
// ninjaMirasaki.drinkSake();







