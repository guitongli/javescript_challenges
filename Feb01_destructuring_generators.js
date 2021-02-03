//Exercise Deconstructing
//task 1#

const reverseArray = (arr) => [...arr].reverse();

//task 2#

const combineArray = (arr1, arr2) => [...arr1, ...arr2];

//task 3#

function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}

//task 4#
function getNameAndCountry({ name, country }) {
    return [name, country];
}

function getRelocatedCity(city1, city2) {
    if (!city2) {
        city2 = { country: "Germany" };
    }
    var country = getNameAndCountry(city2)[1];
    var newCity1 = {};
    Object.assign(newCity1, city1);
    newCity1.country = country;
    return newCity1;
}

//Exercise Generators
//task 1#
for (const num of fizzBuzz()) {
    console.log(num);
}
function* fizzBuzz() {
    yield 1;
    yield 2;
    yield "fizz";
    yield 4;
    yield "buzz";
    yield "fizz";
    yield 7;
    yield 8;
    yield "fizz";

    yield "buzz";
    yield 11;
    yield "fizz";
    yield 13;
    yield 14;
    yield "buzz";
    yield 16;
    yield 17;
    yield "fizz";
    yield 19;
    yield "buzz";
    yield "fizz";
    yield 22;
    yield 23;
    yield "fizz";
    yield "buzz";
    yield 26;
    yield "fizz";
    yield 28;
    yield 29;

    yield "fizzbuzz";
    yield 31;
    yield 32;
    yield "fizz";

    yield 34;
    yield "buzz";
    yield "fizz";
    yield 37;
    yield 38;
    yield "fizz";
    yield "buzz";
    yield 41;
    yield "fizz";
    yield 43;
    yield 44;
    yield "buzz";
    yield 46;
    yield 47;
    yield "fizz";

    yield 49;

    yield "buzz";

    yield "fizz";
    yield 52;
    yield 53;
    yield "fizz";
    yield "buzz";
    yield 56;
    yield "fizz";
    yield 58;
    yield 59;
    yield "fizzbuzz";
    yield 61;
    yield 62;
    yield "fizz";
    yield 64;
    yield "buzz";
    yield "fizz";
    yield 67;
    yield 68;
    yield "fizz";

    yield "buzz";
    yield 71;
    yield "fizz";
    yield 73;
    yield 74;
    yield "fizzbuzz";
    yield 76;
    yield 77;
    yield "fizz";
    yield 79;
    yield "buzz";
    yield "fizz";
    yield 82;
    yield 83;
    yield "fizz";
    yield "buzz";
    yield 86;
    yield "fizz";
    yield 88;
    yield 89;

    yield "fizzbuzz";
    yield 91;
    yield 92;
    yield "fizz";

    yield 94;
    yield "buzz";
    yield "fizz";
    yield 97;
    yield 98;
    yield "fizz";
    yield "fizzbuzz";
}

//task 2
function* reverseArray(arr) {
    const arrRev = [...arr];
    yield arrRev.reverse();
}

/*function* reverse(original) {
    const clone = [...original];
    while (clone.length) {
        yield clone.pop();
    }
}/*

let iterator = reverseArray();

let reversedArray = iterator.next();

//bonus exercise unfinished...
