const http = require("http");
const server = http
let dateObj = new Date();

    .createServer((request, response) => {
        request.on("error", (err) => console.log(err));
        response.on("error", (err) => console.log(err));
        const { headers, method, url } = request;
        console.log(headers, method, url);
        if (method == "GET") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            console.log(response.date);
            // fs.appendFile("requests.txt", "data to append", (err) => {
            //     if (err) throw err;
            //     console.log('The "data to append" was appended to file!');
            // });
            response.end(`<!doctype html>
                <html>
                <title>Hello World!</title>
                <p>Hello World!</p>
                </html>`);
        } else if (method == "HEAD") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.end(`<h2>zo</h2>`);
        } else if (method == "POST") {
            console.log(request);
            response.setHeader("location", "/");
            response.statusCode = 302;
        } else {
            response.statusCode = 405;
        }
    })
    .listen(8080, () => console.log("listening"));
