// developer.twitter.com/
// tuthentication
//review ajax
const secret = require('.secrets');
const {twitterKey, twitterSecret} = secret;

// need to figure out how prettier works

const https = require("https")
// to talk to the api

module.exports.getTocken = function getTocken(callbackToken){
// bearerToken
let credentials = `${twitterKey}:${twitterSecret}`;
let encodedCredentials = Buffer.from(credentials).toString('base64');
const options ={
    host: "api.twitter,com",
    path:"/oauth2/token",
    method:"POST",
    headers: {
        Authorization: `Basic ${encodedCredentials}`,
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    }
}
function reqCallback(response){
    if(response.statusCode !=200){
        callbackTocken(response.statusCode);
        
        return;

    }
    let body='';
    response.on('data', (chunk)=>{
        body += chunk;
    });

    response.on('end', ()=> {
        console.log("body" body);
        let parsedBody = JSON.parse(body);
        console.log("parsed", parsedBody.access_token);
        callbackToken(null, parsedBody.access_token);
        //null means actively setting everything is ok, whereas undefined is  the default and means nothing.
    })
}
const req = https.request(options, reqCallback);
req.end()
}
module.exports.getTweets = function getTweets(bearerTocken, callbackTweets){
    //
};

module.exports.filterTweets =function filterTweets(tweets){
    // clean up / filter our tween response.
}