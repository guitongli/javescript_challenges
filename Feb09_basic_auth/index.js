
const express = require('express');
const app = express();
const basicAuth = require('basic-auth')
var goal = ''
var auth = function(req, res, next) {
	var creds = basicAuth(req);
	if (!creds || creds.name != 'fe' || creds.pass != 'opensesame') {
			res.setHeader('WWW-Authenticate', 'Basic realm="Enter your credentials to see this stuff."');
			res.sendStatus(401);
	} else {
			next();
	}
};
app.use(auth);


// app.use(express.urlencoded({extended:false})); 
app.use(express.static('./spotify'));
// app.use(express.static(path.join(__dirname, 'static')));
app.use((req, res, next) =>{  
	next()
});

	app.listen(8080, () => console.log("hi"));
