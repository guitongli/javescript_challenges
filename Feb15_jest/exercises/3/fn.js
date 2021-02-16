module.exports = function fn(input) {
    if (typeof input == "string") {
        return input.split("").reverse().join("");
    } else if (typeof input !== "string" && !Array.isArray(input)) {
        return null;
    } else if (Array.isArray(input)) {
        input[0] = input[0].split("").reverse().join("");
        input[1] = null;
        return input;
    }
};
