const countries = require("./countries");

test("empty array for empty string", () => {
    expect(countries.find("")).toEqual([]);
});

test("it returns no more than four matchs", () => {
    expect(countries.find("s").length).toBeLessThanOrEqual(4);
});

test("case insensitivity", () => {
    expect(countries.find("a")).toEqual(countries.find("A"));
});

test("empty array for not existing match", () => {
    expect(countries.find("honolulu")).toEqual([]);
});
