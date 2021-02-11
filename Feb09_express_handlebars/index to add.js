<<<<<<< HEAD
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
=======
const express = require('express');
const app = express();
const hb = require('express-handlebars')
const projects = require('./list')

app.engine('handlebars', hb());
app.set('view engine', 'handlebars')

app.use(express.static('./public'));
app.use(express.static('./projects'));

app.get('/', (req, res) =>{
  // res.writeHead(200);
res.render('index', {
  layout: 'welcoming',
  projects
})
})
app.get('/projects/:project',(req,res) =>{
  // var profile = req.params.project
  res.render('projects', {
    layout: 'project',
    projects
  })
})
>>>>>>> 09367a4c325aee4c884dcc0ca65421f99e870e46

//takes to arguments, first is the template name, second is a config obj.
// {{#array}} is shorthand for looping array {{#each array}}

/* <ul>
  {{#teachrs}}
      <li> this
</li> */
<<<<<<< HEAD
app.listen(8080, () => console.log("hi"));
=======
app.listen(8080, () => console.log('hi'))
>>>>>>> 09367a4c325aee4c884dcc0ca65421f99e870e46
