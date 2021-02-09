
const express = require('express');
const app = express(); 
const cookieParser = require('cookie-parser')
const {projectList} = require('./listModule.js')

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('./projects'));
// app.use(express.static(path.join(__dirname, 'static')));
app.use((req, res, next) =>{  
	
	next()
});

app.get('/', (req, res) =>{  

	if (!req.cookies.authenticated){
		res.redirect('/cookie');
	}else {
	res.send(`<h1>Guitong's crappy Portfolio</h1> ${projectList()}`)
}
})
app.post('/', (req,res) => {
	console.log(req.body)
})
app.get('/cookie',(req, res)=>{
	res.send(`<form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
	<div>
                <input type="checkbox" name="cookiesAgreement"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>`)
				
			})

app.post('/cookie',(req,res)=>{
	if(req.body.cookiesAgreement == 'on'){
		res.cookie('authenticated','true');
		res.redirect('/');
		console.log("ji")
	} else {
		res.send("no cookie no page")
	}
})	
						

	app.listen(8080, () => console.log("hi"));
