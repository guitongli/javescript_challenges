module.exports = function fn(input) {
    if (typeof input == "string") {
        return input.slice("").reverse.join("");
    } else if (typeof input !== "string" || !Array.isArray(input)) {
        return null;
    } else if (Array.isArray(input)) {
        input[0] = input[0].slice("").reverse.join("");
        return input;
    }
};
