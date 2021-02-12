// developer.twitter.com/
// tuthentication
//review ajax
const secrets = require("./secrets");
const { key, secret } = secrets;

// need to figure out how prettier works

const https = require("https");
// to talk to the api
var bearerToken = "";
module.exports.getToken = function getToken(tokenProcess) {
    // bearerToken
    let credentials = `${key}:${secret}`;
    let encodedCredentials = Buffer.from(credentials).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",

        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    // function reqCallback(response){
    //     if(response.statusCode !=200){
    //         callbackTocken(response.statusCode);

    //         return;

    //     }
    //     let body='';
    //     response.on('data', (chunk)=>{
    //         body += chunk;
    //     });

    //     response.on('end', ()=> {
    //         console.log("body" body);
    //         let parsedBody = JSON.parse(body);
    //         console.log("parsed", parsedBody.access_token);
    //         callbackToken(null, parsedBody.access_token);
    //         //null means actively setting everything is ok, whereas undefined is  the default and means nothing.
    //     })
    // }

    const req = https.request(options, (res) => {
        if (res.statusCode != "200") {
            console.log(res.statusCode);
            return;
        }
        let body = "";
        res.on("data", (chunk) => {
            body += chunk;
        });
        req.on("error", (error) => {
            console.error(error);
        });
        res.on("end", () => {
            var token = JSON.parse(body).access_token;

            tokenProcess(token);
        });
    });
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(token) {
    let bearer = token.toString("base64");
    console.log(bearer);
    const options = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?count=100&screen_name=twitterapi",
        method: "GET",
        headers: {
            authorization: `Bearer ${bearer}`,
        },
    };
    const req = https.request(options, (res) => {
        if (res.statusCode != "200") {
            console.log(res.statusCode);
            return;
        }
        let body = "";
        res.on("data", (chunk) => {
            body += chunk;
        });
        req.on("error", (error) => {
            console.error(error);
        });
        res.on("end", () => {
            var response = JSON.parse(body);
            console.log(response);
        });
    });
    req.end();
};

// module.exports.filterTweets = function filterTweets(tweets) {
//     // clean up / filter our tween response.
// };
