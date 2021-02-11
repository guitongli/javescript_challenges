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

//takes to arguments, first is the template name, second is a config obj.
// {{#array}} is shorthand for looping array {{#each array}}

/* <ul>
  {{#teachrs}}
      <li> this
</li> */
app.listen(8080, () => console.log('hi'))