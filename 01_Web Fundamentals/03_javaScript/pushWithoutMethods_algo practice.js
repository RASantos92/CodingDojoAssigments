//WARMUP-  Write the function that pushes into an array WITHOUT using push in the function. Try to do this without using any built-in array methods.

//arr.pushFront(0) => [0,2,4,6,8,10]


function pushEnd(arr, num) {
    arr[arr.length] = num;
    return arr;
}
pushEnd([2, 4, 6], 8);

//Array: Push Front
//Given array and an additional value, insert this value at the beginning of the array. Try to do this without using any built-in methods.

// function pushFront(arr, num) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr[i + 1] = arr[i];
//     }
//     arr[0] = num;
//     console.log(arr);
//     return arr;
// }
// pushFront([1, 2, 3, 4], 7);


/////////////////////////////another example
// function pushWithoutPush(arr, num) {
//     arr[arr.length] = num;
//     console.log(arr);
// }
// pushWithoutPush([1,2],3);

// function pushtoFront(arr, num){
//     var newArr = []
//     newArr[newArr.length]=num
//     for(var i = 0; i<arr.length; i++){
// newArr[newArr.length]=arr[i]
//     }
//     console.log(newArr)
// }
// pushtoFront([1,2],3)









