// 1. Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

function each(param1, param2) {
    if (typeof param1 == "object") {
        for (var key in param1) {
            param2(param1[key], key);
        }
    } else if (Array.isArray(param1)) {
        for (i = 0; i < param1.length; i++) {
            param2(param1[i], i);
        }
    }
}

//2.Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order.
// Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

function revArray(oldArray) {
    let newArray = [];
    for (let i = 0; i < oldArray.length; i++) {
        newArray.unshift(oldArray[i]);
    }
    return newArray;
}

//3. Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.
function getLessThanZero(numArray) {
    let lessThanZero = [];

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < 0) {
            lessThanZero.push(numArray[i]);
        }
    }
    return lessThanZero;
}

//or

function getLessThanZero(numArray) {
    let newArray = numArray.filter(function (num) {
        return num < 0;
    });
    return newArray;
}
