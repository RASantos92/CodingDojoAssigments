// const s1 = {
//     bread: "sourdough",
//     protein: "bacon",
//     isToasted: true,
//     toppings: ["avacado", "lettuce", "tomato", "basil pesto aioli"],
//     display: function() {
//         console.log(`
//             This sandwich contains:
//             ==================================
//             bread:    ${ this.bread }
//             protein:  ${ this.protein }
//             toasted:  ${ this.isToasted ? "Yes" : "No" }
//             toppings: ${ this.toppings.join(", ") }
//         `);
//     }
// };

// function Sandwich(bread, protein, isToasted, ...toppings) {
//     this.bread = bread;
//     this.protein = protein;
//     this.isToasted = isToasted;
//     this.toppings = toppings;
//     this.someMethod = function() {
//       // TODO: make this method do something
//     }
// }

class Sandwich{
    constructor(bread,protein,isToasted,calories,...toppings){
        this.bread = bread;
        this.protein = protein;
        this.isToasted = isToasted;
        this.toppings = toppings;
        this.calories = calories;
    }

    display(){
        console.log(`
            This sandwich contains:
            ==================================
            bread:    ${ this.bread }
            protein:  ${ this.protein }
            toasted:  ${ this.isToasted ? "Yes" : "No" }
            toppings: ${ this.toppings.join(", ") }
            calories: ${ this.calories }
        `);
    }

}



class Sub extends Sandwich{
    constructor(bread,protein,isToasted,calories,size,...toppings){
        super(bread,protein,isToasted,calories,toppings);
        this.size = size;
    }
    display(){
        super.display();
        console.log(`
            size: ${this.size} inches
        `)
    }
}

class Ninja{
    constructor(name,dojo,fullness){
        this.name = name;
        this.dojo = dojo;
        this.fullness = fullness;
        this.foodHistory = [];
    }

    eat(meal){
        if(meal instanceof Sandwich){
            this.foodHistory.push(meal);
            this.fullness += meal.calories;
            this.showStats();

        }
        else{
            console.log(`Don't eat that ${meal}!!!`);
        }
    }

    showStats(){
        console.log(`
            ${this.name}'s Stats:
            ==================================
            dojo:        ${ this.dojo }
            fullness:    ${  this.fullness }
            food history:${ this.foodHistory }
        `);
    }

}




var tummyAche = new Sandwich("Rye","Turducken",true,2000,"avacado","tomato","dog food","spam","mustard",'veggimite',"vinegar","nutella","fish sauce");

tummyAche.display();

var theArthur = new Sub("Italian Herb & Cheese & Jalepeno","Chicken & Shredded Beef",false,1800,12,"sprinkles","pepper jack cheese","ranch","honey mustard","giardiniera","sour cream","avacado","refried beans","tide pod");

theArthur.display();

var ahmet = new Ninja("Ahmet","Online",0);

ahmet.eat("Burger");

ahmet.eat(tummyAche);
ahmet.eat(theArthur);



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////class example from Bertrand


// const s1 = {
//     bread: "sourdough",
//     protein: "bacon",
//     isToasted: true,
//     toppings: ["avacado", "lettuce", "tomato", "basil pesto aioli"],
//     display: function() {
//         console.log(`
//             This sandwich contains:
//             ==================================
//             bread:    ${ this.bread }
//             protein:  ${ this.protein }
//             toasted:  ${ this.isToasted ? "Yes" : "No" }
//             toppings: ${ this.toppings.join(", ") }
//         `);
//     }
// };

// function Sandwich(bread, protein, isToasted, ...toppings) {
//     this.bread = bread;
//     this.protein = protein;
//     this.isToasted = isToasted;
//     this.toppings = toppings;
//     this.someMethod = function() {
//       // TODO: make this method do something
//     }
// }

// class Sandwich{
//     constructor(bread,protein,isToasted,name, calories,...toppings){
//         this.bread = bread;
//         this.protein = protein;
//         this.isToasted = isToasted;
//         this.toppings = toppings;
//         this.calories = calories;
//         this.name = name;
//     }

//     display(){
//         console.log(`
//             This sandwich contains:
//             ==================================
//             bread:    ${ this.bread }
//             protein:  ${ this.protein }
//             toasted:  ${ this.isToasted ? "Yes" : "No" }
//             toppings: ${ this.toppings.join(", ") }
//             calories: ${ this.calories }
//         `);
//     }

// }



// class Sub extends Sandwich{
//     constructor(bread,protein,isToasted,name,calories,size,...toppings){
//         super(bread,protein,isToasted,name,calories,toppings);
//         this.size = size;
//     }
//     display(){
//         super.display();
//         console.log(`
//             size: ${this.size} inches
//         `)
//     }
// }

// class Ninja{
//     constructor(name,dojo,fullness){
//         this.name = name;
//         this.dojo = dojo;
//         this.fullness = fullness;
//         this.foodHistory = [];
//     }

//     eat(meal){
//         if(meal instanceof Sandwich){
//             this.foodHistory.push(meal.name);
//             this.fullness += meal.calories;
//             this.showStats();

//         }
//         else{
//             console.log(`Don't eat that ${meal}!!!`);
//         }
//     }

//     showStats(){
//         console.log(`
//             ${this.name}'s Stats:
//             ==================================
//             dojo:        ${ this.dojo }
//             fullness:    ${  this.fullness }
//             food history:${ this.foodHistory }
//         `);
//     }

// }




// var tummyAche = new Sandwich("Rye","Turducken",true,'Tummy Ache',2000,"avacado","tomato","dog food","spam","mustard",'veggimite',"vinegar","nutella","fish sauce");

// tummyAche.display();

// var theArthur = new Sub("Italian Herb & Cheese & Jalepeno","Chicken & Shredded Beef",false,'The Arthur ',1800,12,"sprinkles","pepper jack cheese","ranch","honey mustard","giardiniera","sour cream","avacado","refried beans","tide pod");

// theArthur.display();

// var ahmet = new Ninja("Ahmet","Online",0);

// ahmet.eat("Burger");

// ahmet.eat(tummyAche);
// ahmet.eat(theArthur);