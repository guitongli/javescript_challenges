const http = require("http");
const fs = require("fs");
const path = require("path");
const { projectList } = require("./listModule"); 
console.log(projectList());
http
  .createServer((req, res) => {


    console.log("gotcha");
    req.on("error", (err) => console.log("err in req:", err));
    res.on("error", (err) => console.log("err in res:", err));
    const { url, method } = req;
    console.log(url);

    if (method !== "GET") {
      res.statusCode = 405;
      return res.end();
    }

    const realPath = path.normalize(__dirname + "/projects" + url);
    console.log("real" + realPath);

    if (!realPath.startsWith(__dirname)) {
      res.statusCode = 403;
      res.end();
    }

    fs.stat(realPath, (err, stats) => {
      if (err) {
        console.log(err);
        res.statusCode = 404;
        return res.end();
      }
      if (url == "/") {
        res.setHeader("Content-Type", "text/html");
        return res.end(`Guitong's crappy Portfolio ${projectList()}`);
      }
      if (stats.isDirectory() && url !== "/") {
        if (url.endsWith("/")) {
          console.log("im here");

          res.setHeader("Content-Type", "text/html");
          const readStream = fs.createReadStream(`${realPath}index.html`);
          readStream.on("error", (err) => {
            res.statusCode = 500;
            return res.end();
          });

          readStream.pipe(res);
        } else {
          res.writeHead(302, { Location: `${url}/index.html` });
          console.log(`im everywhere`);
          return res.end();
        }
      } else if (stats.isFile()) {
        console.log("im there");
        const ext = path.extname(realPath);
        const extObj = {
          ".html": "text/html",
          ".css": "text/css",
          ".js": "text/javascript",
          ".json": "application/json",
          ".gif": "image/gif",
          ".jpg": "image/jpg"
        };
        res.setHeader("Content-Type", extObj[ext]);
        console.log(ext);
        const readStream = fs.createReadStream(realPath);
        readStream.on("error", (err) => {
          res.statusCode = 500;
          return res.end();
        });
        readStream.pipe(res);
      }
    });
  })
  .listen(8080, () => console.log("hi"));
