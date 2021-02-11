const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projects = require("./list");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.locals.helpers = {
    highlight(current, profile) {
        if (current.location == profile) {
            return "highlight";
        }
        return "";
    },
};

app.use(express.static("./public"));
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    // res.writeHead(200);
    res.render("index", {
        layout: "welcoming",
        projects,
    });
});

app.get("/projects/:project", (req, res) => {
    var profile = req.params.project;
    var current = projects.find((proj) => proj.location == profile);
    console.log(current);
    res.render("projects", {
        projects,
        current,
        profile,
        layout: "project",
        title: `highlight: ${current.item}`,
    });
});

//takes to arguments, first is the template name, second is a config obj.
// {{#array}} is shorthand for looping array {{#each array}}

/* <ul>
  {{#teachrs}}
      <li> this
</li> */
app.listen(8080, () => console.log("hi"));
