const http = require("http");
const fs = require("fs");
let dateObj = new Date();
let year = dateObj.getFullYear();

let date = ("0" + dateObj.getDate()).slice(-2);
let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);

const server = http
    .createServer((request, response) => {
        request.on("error", (err) => console.log(err));
        response.on("error", (err) => console.log(err));
        const { headers, method, url } = request;
        console.log(headers, method, url);
        if (method == "GET") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            let text = `Date: ${date}/${month}/${year}\t
            Method:${method}\t
            URL:${url}\t
            Headers:${request.headers["user-agent"]}`;
            fs.appendFile("requests.txt", text, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log('The "data to append" was appended to file!');
            });
            //part 3 suspended
            if (url.indexOf("/requests.txt")) {
                const readable = fs.createReadStream("requests.txt");
                const writable = fs.createWriteStream("file.txt");
                readable.pipe(writable);
            }
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
