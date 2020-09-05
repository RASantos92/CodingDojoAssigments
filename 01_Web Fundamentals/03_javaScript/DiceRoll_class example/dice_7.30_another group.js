// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

// Math.random() makes a number between 0 and 1, but it never gets to 1
// Math.ceil(x) rounds up a number
// Math.floor(x) rounds down a number
// Math.trunc(x) cuts off the decimal

function rollOne(){
    var rand = Math.random() * 6;
    rand = Math.ceil(rand);
    return rand;
}

// 2) Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”


function playFives(num) {
    for(var i = 1 ; i <= num ; i++) {
        var roll = rollOne();
        console.log(roll);
        if(roll == 5) {
            roll = "That's good luck!";
        }
    }
}

playFives(3);

// 3) Third, create a new function named playStatistics(), which should call rollOne() eight
// times (but not print anything after each call). After the last of these eight calls, it should print out
// the lowest and highest values that it received from rollOne, among those eight calls.

function rollOne(){
    var rand = Math.random() * 6;
    rand = Math.ceil(rand);
    return rand;
}
function playStatistics() {
    var temp = [];
    for(var i = 1 ; i <= 8 ; i++) {
        temp.push(rollOne());
    }
    console.log(temp);
    var max = temp[0];
    var low = temp[0];
    for (var i =0; i < temp.length; i++) {
        if (temp[i] > max) {
            max = temp[i];
        }
        if(temp[i] < low){
            low = temp[i];
        }
    }
    console.log(max);
    console.log(low);


}

playStatistics();


function LargestNumber(arr) {
    var max = arr[0];
    for (var i =0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    return max;
}

// 4) Fourth, make a copy of playStatistics and add code to make playStatistics2(), so
// that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.

function rollOne(){
    var rand = Math.random() * 6;
    rand = Math.ceil(rand);
    return rand;
}
function playStatistics2(num) {
    var temp = [];
    var sum = 0;
    for(var i = 1 ; i <= num ; i++) {
        var roll = rollOne();
        temp.push(roll);
        sum += roll;
    }
    console.log(temp);
    var max = temp[0];
    var low = temp[0];
    for (var i =0; i < temp.length; i++) {
        if (temp[i] > max) {
            max = temp[i];
        }
        if(temp[i] < low){
            low = temp[i];
        }
    }
    console.log(max);
    console.log(low);
    console.log(sum);


}

playStatistics2(8);





function sum_even_numbers(){
    var sum = 0;
    for(i = 0; i<1001; i++)
    sum += i;
    
    return sum; 
}

// 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that
// it will roll as many times as you want, instead of always doing this eight times.

function rollOne(){
    var rand = Math.random() * 6;
    rand = Math.ceil(rand);
    return rand;
}
function playStatistics3(num) {
    var temp = [];
    var sum = 0;
    for(var i = 1 ; i <= num ; i++) {
        var roll = rollOne();
        temp.push(roll);
        sum += roll;
    }
    console.log(temp);
    var max = temp[0];
    var low = temp[0];
    for (var i =0; i < temp.length; i++) {
        if (temp[i] > max) {
            max = temp[i];
        }
        if(temp[i] < low){
            low = temp[i];
        }
    }
    console.log(max);
    console.log(low);
    console.log(sum);


}

playStatistics3(8);

// 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num),
// so that at the end instead of the total sum, it prints the average roll.

function rollOne(){
    var rand = Math.random() * 6;
    rand = Math.ceil(rand);
    return rand;
}
function playStatistics4(num) {
    var temp = [];
    var sum = 0;
    for(var i = 1 ; i <= num ; i++) {
        var roll = rollOne();
        temp.push(roll);
        sum += roll;
    }
    console.log(temp);
    var max = temp[0];
    var low = temp[0];
    for (var i =0; i < temp.length; i++) {
        if (temp[i] > max) {
            max = temp[i];
        }
        if(temp[i] < low){
            low = temp[i];
        }
    }
    console.log(max);
    console.log(low);
    console.log(sum/temp.length);



}

playStatistics4(8);

//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
// integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
// Display number of rolls, min, max, and average.

function rollTwo(){
    var rand = Math.random() * 20;
    rand = Math.ceil(rand);
    return rand;
}
function playStatistics5(num) {
    var temp = [];
    var sum = 0;
    var old_roll = 0;
    for(var i = 1 ; i <= num ; i++) {
        var current_roll = rollTwo();
        console.log(old_roll);
        console.log(current_roll);
        old_roll = current_roll;
        temp.push(current_roll);
        sum += current_roll;
    
    }
    console.log(temp);
    var max = temp[0];
    var low = temp[0];
    for (var i =0; i < temp.length; i++) {
        if (temp[i] > max) {
            max = temp[i];
        }
        if(temp[i] < low){
            low = temp[i];
        }
    }
    console.log(max);
    console.log(low);
    console.log(sum/temp.length);



}

playStatistics5(8);