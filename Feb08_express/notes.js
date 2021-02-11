const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.get('/', (req,res) => {
    res.send('<h1>hello fennel</h1>')
    // redirect(''),sendFile(''), render, json
})


})
app.listen(8080, () => console.log("hi"))

//post sends body
//middleware runs before routes.
//express.urlencoded defines the object called req.body
//works for every route
// next() must be called 
//app.use(cookieParser());
// cookie parser comes from express. has to come before static.
//pp.use(express.static('./public'));
// put a folder to serve static files. put img, js, css there
//app.use(express.urlencoded({extended: false})) 
//functions with a returned body from post
// app.use takes a single argument function and is called middle ware.
//name from the form become the keys of the object
// app.use((req, res, next)=>{})
// app.get('/user/:username/:postId',(req,res)=>{
//  const {username, postId} = req.params
//  console.log(req.cookies)
//  res.cookie('first-cookie', 'yo') 
 // can be boolean. 
// single-domain policy