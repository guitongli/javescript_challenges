var x = 5;
var doubleX;

function timesTwo(num) {
    return (num *= 2);
}

doubleX = timesTwo(x);

var numbers = [x, doubleX];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {};
// numbers = new Object ()

numbers.y = doubleX;
