
const express = require('express');
const app = express(); 
const cookieParser = require('cookie-parser')
const {projectList} = require('./listModule.js')
const basicAuth = require('basic-auth') 

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('./projects'));
// app.use(express.static(path.join(__dirname, 'static')));
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
app.get('/', (req, res) =>{  

	if (!req.cookies.authenticated){
		res.redirect('/cookie');
	}else {
	res.send(`<h1>Guitong's crappy Portfolio</h1> ${projectList()}`)
}
})
 
app.get('/cookie',(req, res)=>{
	
	res.send(`<form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
	<div>
                <input type="checkbox" name="cookiesAgreement"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>`)
		console.log("im here")
				
			})

app.post('/cookie',(req,res)=>{
	if(req.body.cookiesAgreement == 'on'){
		res.cookie('authenticated','true');
		res.redirect(req.cookies.url);
		console.log(req.cookies.url);
		res.clearCookie('url')
	} else {
		res.send("no cookie no page")
	}
})	
						

	app.listen(8080, () => console.log("hi"));
