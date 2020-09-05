var testArr = [6, 3, 5, 1, 2, 4];
var sum = 0;
var temp = 0;
for (var i = 0; i < testArr.length; i++) {
    sum = sum + testArr[i];
    temp = testArr[i];
    console.log("Num is", temp, ",", "Sum is", sum);
}


testArr = [6, 3, 5, 1, 2, 4];
var arr = [];
for (var i = 0; i < testArr.length; i++){
    arr.push(testArr[i]*i);
}
console.log(arr);