// 1. Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:

function logType(arg) {
    if (typeof arg == "undefined") {
        console.log("undefined!");
    } else if (arg === null) {
        console.log("null!");
    } else if (Number.isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg === "number") {
        console.log("number!");
    } else if (typeof arg === "boolean") {
        console.log("boolean!");
    } else if (typeof arg === "bigint") {
        console.log("bigInt!");
    } else if (typeof arg === "function") {
        console.log("function!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else if (typeof arg === "object") {
        console.log("object!");
    } else if (typeof arg === "symbol") {
        console.log("I have no idea!");
    }
}
logType(8);
logType(NaN);
logType(undefined);
logType(true);

// 2. create a new empty object b and use a for..in loop to iterate over all of a's properties. Give b properties whose names are the values from a and whose values are the property names from a.
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};
var b = {};
for (var key in a) {
    b[a[key]] = key;
}

//3. Write a while or for loop that counts down from 10 to 1, logging each number to the console.

for (var i = 10; i > 0; i--) {
    console.log(i);
}
