const http = require("http");
const chalk = require("chalk");
const querystring = require("querystring");
console.log(chalk.red("o"));
const server = http
    .createServer((request, response) => {
        request.on("error", (err) => console.log(err));
        response.on("error", (err) => console.log(err));
        if (request.method == "GET") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.end(`<!DOCTYPE html>
<html>
    <title>Colors</title>
    <form method="POST">
        <input type="text" name="text" />
        <select name="color">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
        </select>
        <button type="submit">Go</button>
    </form>
</html>`);
        } else if (request.method == "POST") {
            var body = "";
            request
                .on("data", (chunk) => {
                    body += chunk;
                    console.log(chunk.toString());
                })
                .on("end", () => {
                    const { text, color } = querystring.parse(body);
                    console.log(chalk[color](text));

                    response.end(`<!doctype html>
<html>
<title>${text}</title>
<a href="/" style="color:${color}">${text}</a>
</html>`);
                });
        } else {
            response.statusCode = 405;
        }
    })
    .listen(8080, () => console.log("listening"));
