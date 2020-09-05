// Generate Coin Change
// Change is inevitable (especially when breaking a
// twenty). Make generateCoinChange(cents).
// Accept a number of American cents, compute
// and print how to represent that amount with
// smallest number of coins. Common American
// coins are pennies (1 cent), nickels (5 cents),
// dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4


// Second: can you simplify/shorten your code?

// Third: add half-dollar (50 cents) and dollar (100
// cents) coins with 40 additional characters or less.

//////////////////////////////////////////////////////////////////////////     Option 1     //////////////////////////////////////////////////////
// function generateCoinChange(cents){

//     var quarters = 0;
//     var dimes = 0;
//     var nickels = 0;
//     var pennies = 0;
    
//     while (cents >= 25) {
//         quarters++;
//         cents -= 25;
//     }
//     while (cents >= 10) {
//         dimes++;
//         cents -= 10;
//     }
//     while (cents >= 5) {
//         nickels++;
//         cents -= 5;
//     }
//     while (cents >= 1) {
//         pennies++;
//         cents -= 1;
//     }
    
//     console.log("quarters: " + quarters);
//     console.log("dimes: " + dimes);
//     console.log("nickels: " + nickels);
//     console.log("pennies: " + pennies);
//     }
//     generateCoinChange(94);

//////////////////////////////////////////////////////////////////////////      Option 2  (careful- i think stack overflow??) - SchneiderBertrand     //////////////////////////////////////////////////////
let generateCoinChange = (money) => {
    let penny = 0, nickel = 0, dime = 0, quarter = 0;
    let amount;

    for ( money; money > 0; money - amount) {
        console.log(`Running, money equal to ${money}`);
        if (money >= 25) {
            amount = 25;
            money -= amount;
            quarter++;
        } else if (money >= 10) {
            amount = 10;
            money -= amount;
            dime++;
        } else if (money >= 5) {
            amount = 5;
            money -= amount;
            nickel++;
        } else if(money >= 1) {
            amount = 1;
            money -= amount;
            penny++;
        }
    }

    console.log(`Quarter: ${quarter}, Dime: ${dime}, Nickel: ${nickel}, Penny: ${penny}`);
};


generateCoinChange(94);

//////////////////////////////////////////////////////////////////////////      Option 3 - EricViera      //////////////////////////////////////////////////////
// function generateCoinChange(cents){

//     var quarters = 0;
//     var dimes = 0;
//     var nickels = 0;
//     var pennies = 0;
    
//     while (cents >= 25) {
//         quarters++;
//         cents -= 25;
//     }
//     while (cents >= 10) {
//         dimes++;
//         cents -= 10;
//     }
//     while (cents >= 5) {
//         nickels++;
//         cents -= 5;
//     }
//     while (cents >= 1) {
//         pennies++;
//         cents -= 1;
//     }
    
//     console.log("quarters: " + quarters);
//     console.log("dimes: " + dimes);
//     console.log("nickels: " + nickels);
//     console.log("pennies: " + pennies);
//     }
//     generateCoinChange(94);

//////////////////////////////////////////////////////////////////////////      Option 3 - JoshWren       //////////////////////////////////////////////////////
    // function generateCoinChange(money) {
    //     var i = money,
    //         amount = 25,
    //         penny = 0,
    //         nickel = 0,
    //         dime = 0,
    //         quarter = 0;
    //     for (i; i > 0; i - amount) {
    //         if (i >= 25) {
    //             amount = 25;
    //             i -= amount;
    //             quarter++;
    //         } else if (i >= 10) {
    //             amount = 10;
    //             i -= amount;
    //             dime++;
    //         } else if (i >= 5) {
    //             amount = 5;
    //             i -= amount;
    //             nickel++;
    //         } else if (i >= 1) {
    //             amount = 1;
    //             i -= amount;
    //             penny++;
    //         }
    //     }
    
    //     console.log(quarter, dime, nickel, penny);
    // }
    
    // var cash = 122;
    // change = generateCoinChange(cash);

//////////////////////////////////////////////////////////////////////////      Option 3 - ShawnLockhart       //////////////////////////////////////////////////////
// function generateCoinChange(n) {
//     var dollar = 0,
//         halfDollar = 0,
//         quarter = 0,
//         dime = 0,
//         nickel = 0,
//         penny = 0;
//     while (n >= 100) {
//         // 75
//         n -= 100;
//         dollar++;
//     }
//     while (n >= 50) {
//         // 75
//         n -= 50;
//         halfDollar++;
//     }
//     while (n >= 25) {
//         n -= 25;
//         quarter++;
//     }
//     while (n >= 10) {
//         // 85
//         n -= 10;
//         dime++;
//     }
//     while (n >= 5) {
//         // 90
//         n -= 5;
//         nickel++;
//     }
//     while (n >= 1) {
//         // 94
//         n -= 1;
//         penny++;
//     }
//     return `Dollar: ${dollar}, Half Dollars ${halfDollar}, Quarters: ${quarter}, Dimes ${dime}, Nickels: ${nickel}, Pennies ${penny}`;
// }

// generateCoinChange(350);

// function gCC(n) {
//     console.log(dollar);
//     var dollar = Math.floor(n / 100);
//     console.log(dollar);
//     n -= 100 * dollar;
//     console.log(dollar);
//     var halfDollar = Math.floor(n / 50);
//     console.log(halfDollar);
//     n -= 25 * halfDollar;
//     var quarter = Math.floor(n / 25);
//     console.log(quarter);
//     n -= 25 * quarter;
//     var dime = Math.floor(n / 10);
//     console.log(dime);
//     n -= 10 * dime;
//     var nickel = Math.floor(n / 5);
//     console.log(nickel);
//     n -= 5 * nickel;
//     var penny = Math.floor(n / 1);
//     console.log(penny);
//     n -= 1 * penny;
//     return `Dollar: ${dollar}, Half Dollars ${halfDollar}, Quarters: ${quarter}, Dimes ${dime}, Nickels: ${nickel}, Pennies ${penny}`;
// }

// gCC(394);








