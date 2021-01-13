//1. Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

function sumAll() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
}

// 2. Write a function that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.

function waitThenRun(fn) {
    setTimeout(fn, 1500);
}

// 3. Write a function that expects a number as an argument.
//If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'.
//If the number that is passed in is greater than or equal to 1000000 it should simply return the number
// Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.

function sortNumbers(num) {
    if (typeof num !== "number" || num <= 0) {
        return "Error";
    } else if (num >= 1000000) {
        return num;
    } else {
        do {
            num = num * 10;
        } while (num < 1000000);
        return num;
    }
}

// Bonus exercise
// Write a function that returns a function that can be called repeatedly and passed a number each time.
// Each time it is called it should return the sum of the number that is passed in and all other numbers that were passed in previous calls.
//That is, it should return the sum of all the numbers that were ever passed to it.


function getTotaler() {
    var sum = 0
    return function (num) {
        sum = sum + num;
        return sum;
    }; 
}

that is why they used another var to hold the block! because it takes what it returns. the child block holds the 
sum 