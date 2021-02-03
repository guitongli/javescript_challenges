// function parsingURL(url) {}
// const url = process.argv;
const qs = require("querystring");
const url = require("url");
const str = process.argv[2];
const content = url.parse(str);
// const obj = querystring.parse(url);
// const obj = url.parse();

const q = qs.parse(content.query);
const parameters = [
    "protocol",
    "host",
    "hostname",
    "port",
    "pathname",
    "query",
];

parameters.forEach(function (parameter) {
    console.log(`the ${parameter} is ${content[parameter]}`);
});
console.log(q);
if (q) {
    for (var param in q) {
        console.log(`the value of ${param} is ${q[param]}`);
    }
}
