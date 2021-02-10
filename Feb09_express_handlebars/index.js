const express = require('express');
const app = express();
const hb = require('express-handlebars')
const projects = require('./data')

app.engine('handlebars', hb());
app.set('view engine', 'handlebars')

app.use(express.static('./public'));
app.use(express.static('./projects'));

app.get('/', (req, res) =>{
res.render('list', {
  layout: 'welcoming',
  projects
})
})

//takes to arguments, first is the template name, second is a config obj.
// {{#array}} is shorthand for looping array {{#each array}}

{/* <ul>
  {{#teachers}}
      <li> this
</li> */}
app.listen(8080, () => console.log('hi'))