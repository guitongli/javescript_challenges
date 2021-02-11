
const express = require('express');
const app = express(); 
const cookieParser = require('cookie-parser')
const {projectList} = require('./listModule.js')
<<<<<<< HEAD
const basicAuth = require('basic-auth') 
=======
>>>>>>> 09367a4c325aee4c884dcc0ca65421f99e870e46

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('./projects'));
// app.use(express.static(path.join(__dirname, 'static')));
<<<<<<< HEAD
app.use(
    (req, res, next) => {
		  
        if (req.cookies.authenticated || req.url == '/cookie') {
            return next();
        }
        if (!req.cookies.url) {
            res.cookie('url', req.url);
			
        }
        res.redirect('/cookie');
    }
);
// used answer provided
app.use( 
    (req, res, next) => {
        const {name, pass} = basicAuth(req) || {};
        if (name == 'yanky' && pass == 'chicken') {
            return next();
        }
        res.setHeader(
            'WWW-Authenticate',
            'Basic realm="Enter your credentials to see something great."'
        );
        res.sendStatus(401);
    }
);
=======
app.use((req, res, next) =>{  
	
	next()
});

>>>>>>> 09367a4c325aee4c884dcc0ca65421f99e870e46
app.get('/', (req, res) =>{  

	if (!req.cookies.authenticated){
		res.redirect('/cookie');
	}else {
	res.send(`<h1>Guitong's crappy Portfolio</h1> ${projectList()}`)
}
})
<<<<<<< HEAD
 
app.get('/cookie',(req, res)=>{
	
=======
app.post('/', (req,res) => {
	console.log(req.body)
})
app.get('/cookie',(req, res)=>{
>>>>>>> 09367a4c325aee4c884dcc0ca65421f99e870e46
	res.send(`<form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
	<div>
                <input type="checkbox" name="cookiesAgreement"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>`)
<<<<<<< HEAD
		console.log("im here")
=======
>>>>>>> 09367a4c325aee4c884dcc0ca65421f99e870e46
				
			})

app.post('/cookie',(req,res)=>{
	if(req.body.cookiesAgreement == 'on'){
		res.cookie('authenticated','true');
<<<<<<< HEAD
		res.redirect(req.cookies.url);
		console.log(req.cookies.url);
		res.clearCookie('url')
=======
		res.redirect('/');
		console.log("ji")
>>>>>>> 09367a4c325aee4c884dcc0ca65421f99e870e46
	} else {
		res.send("no cookie no page")
	}
})	
						

	app.listen(8080, () => console.log("hi"));
