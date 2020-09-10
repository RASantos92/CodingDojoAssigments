
// **********************  DO NOT RUN THIS.... MY CODE GOES INTO STACKOVERFLOW


// function tossCoin() {
//         return Math.random() > 0.5 ? "heads" : "tails";
//     }

//     function fiveHeadsSync() {
//             let headsCount = 0;
//             let attempts = 0;
//             while(headsCount < 5) {
//                 attempts++;
//                 let result = tossCoin();
//                 console.log(`${result} was flipped`);
//                 if(result === "heads") {
//                     headsCount++;
//                 } else {
//                     headsCount = 0;
//                 }
//             }
//             return `It took ${attempts} tries to flip five "heads"`;
//         }
//         console.log( fiveHeadsSync() );
//         console.log( "This is run after the fiveHeadsSync function completes" );


// // Your mission is to rewrite the above function using Promises. Make sure your fiveHeads function will call the resolve function when the coin has flipped "heads" five times in a row.

//         function fiveHeads() {
//                 return new Promise( (resolve, reject) => {
//                     // your code here!
//                     let headsCount = 0;
//                     let attempts = 0;
//                     while(headsCount < 5){
//                         attempts ++;
//                         let result = tossCoin();
//                         console.log('${result} was flipped');
//                         if (result === "tails"){
//                             reject("Just flipped tails")
//                         }
//                         else if( result === "heads"){
//                             resolve("Just flipped heads")
//                         };
//                     }
//                 });
//             }
//             fiveHeads()
//                 .then( res => console.log(res) )
//                 .catch( err => console.log(err) );
//             console.log( "When does this run now?" );




            // const noMondays = new Promise( (resolve, reject) => {
            //         if(new Date().getDay() !== 1) {
            //             resolve("Good, it's not Monday!");
            //         } else {
            //             reject("Someone has a case of the Mondays!");
            //         }
            //     });
            //     noMondays
            //         .then( res => console.log(res) )
            //         .catch( err => console.log(err) );