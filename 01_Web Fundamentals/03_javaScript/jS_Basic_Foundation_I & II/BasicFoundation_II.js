// Makes each function easier to read on console.
var end = "end"; // phrase to type into readability() function to console.log end of program statement
function readability(input) {
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    if (input == "end") {
        console.log("End of Program");
    } else if (input !== "end") {
        // simple check for people entering other variables `end` or nothing at all into the function
        console.log("Next Function");
    }
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    return 0;
}

///////////////////////////////////////////////////////////Problem 1: Biggie Size - Given array, write fx changing pos.#s in array to "big". 
console.log("Problem #1: Biggie Size:");
function posIntoBig(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            input[i] = "Big";
        }
    }
    console.log("The new array is: [" + input + "]");
    return input;
}
var a = [-1, 3, 5, -5];
console.log("The original array is [" + a + "]");
var b = posIntoBig(a);
readability();

///////////////////////////////////////////////////////////Problem 2: Print Low, Return High - Write fx taking an array. Print the lowest value but return the highest value.
console.log("Problem #2: Print Low, Return High:");
function printLowReturnHigh(input) {
    var min = input[0],
        max = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i] < min) {
            min = input[i];
        }
        if (input[i] > max) {
            max = input[i];
        }
    }
    console.log("The lowest value in the array is: " + min);
    return max;
}
var c = [-255, -100, 0, -300, 1000];
var d = printLowReturnHigh(c);
console.log("The max value of the array is: " + d);
readability();

///////////////////////////////////////////////////////////Problem 3:Print One, Return Another - Write a fx array that prints 2nd to last value and returns the first odd value.
console.log("Problem #3: Print One, Return Another:");
function printOneRtrnAnother(input) {
    var firstOdd = 0;
    console.log(
        "The second to last number of the array is: " + input[input.length - 2]
    );

    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 !== 0) {
            firstOdd = input[i];
            return firstOdd;
        }
    }
    return "There are no odd numbers in the given array.";
}
var e = [0, 1, -1, 3, -2], // expect to print 3, return 1
    f = [0, 2, 4, 6, 8, 10], // expect to print 8, return "There are no odd numbers in the given array."
    g = [-10, 2, 0, 7], // expect to print 0, return 7
    h = printOneRtrnAnother(f);
// Change the argument `e` to a different variable to check it...
console.log("The first odd value of the function is: " + h);
readability();

///////////////////////////////////////////////////////////Problem 4:Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.
console.log("Problem #4: Double Vision:");
function doubleArray(input) {
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i] * 2;
    }
    return input;
}
var m = [1, 2, 3],
    n = [2, 5, 8],
    o = [-1, 0, 10];
console.log("The original array: [" + m + "]");
var p = doubleArray(m);
console.log("The doubled array: [" + p + "]");
readability();

///////////////////////////////////////////////////////////Problem 5:Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
console.log("Problem #5: Count Positives:");
function countPositives(input) {
    var num = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            num++;
        }
    }
    input[input.length - 1] = num;
    return input;
}
var q = [-1, 1, 1, 1];
console.log("The original array: [" + q + "]");
var r = countPositives(q);
console.log("The original array: [" + r + "]");
readability();

///////////////////////////////////////////////////////////Problem 6:Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
console.log("Problem #6: Evens and Odds:");
function checkEvenOdd(input) {
    var oddCounter = 0,
        evenCounter = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== 0) {
            if (input[i] % 2 !== 0) {
                // step 1: check if odd
                oddCounter++; // inc oddCounter
                evenCounter = 0; // reset evenCounter
                if (oddCounter >= 3) {
                    // counter checked if triple or more (because more than four would be two triple sets, etc.)
                    console.log("That's odd!");
                }
            } else {
                // step 2: if not odd, then even
                oddCounter = 0; // reset oddCounter
                evenCounter++; // inc evenCounter
                if (evenCounter >= 3) {
                    // counter checked if triple or more (because more than four would be two triple sets, etc.)
                    console.log("Even more so!");
                }
            }
        } else {
            // added a test for zeros in case of test array being a sneaky jerk :D
            console.log("There's a zero here sir!");
        }
    }
    return "End of checking array for triple evens or triple odds... weirdo";
}
/* The 's' array checks for triple odd, then triple even...
When the function comes across the quadset of odd or even, the respective statement should print twice...
If it was five in a row, it would print three times because there is three sets of triple in a row.
Zero will */
var s = [2, 1, 1, 1, 2, 2, 2, 0, 1, 1, 1, 1, 2, 2, 2, 2];
checkEvenOdd(s);
readability();

///////////////////////////////////////////////////////////Problem 7:Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
console.log("Problem #7: Increment the Seconds:");
function incOddIndex(input) {
    for (var i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            input[i]++;
        }
        console.log(
            "The value of input at index '" + i + " is '[" + input[i] + "]'."
        );
    }
    return input;
}
var t = [0, 3, -1, 12, -8, 1, 0];
console.log("The original array is [" + t + "].");
var u = incOddIndex(t);
console.log("The array's new value is [" + u + "].");
readability();

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
console.log("Previous Lengths:");
function previousLengths(input) {
    var temp;
    for (var i = input.length - 1; i >= 1; i--) {
        if (i > 0) {
            temp = input[i - 1];
            input[i] = temp.length;
        }
    }
    return input;
}
var v = ["hello", "dojo", "awesome"],
    w = previousLengths(v);
console.log(w);
readability();
