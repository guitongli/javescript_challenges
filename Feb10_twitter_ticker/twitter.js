// developer.twitter.com/
// tuthentication
//review ajax
const secrets = require("./secrets");
const { key, secret } = secrets;

// need to figure out how prettier works

const https = require("https");
// to talk to the api
var bearerToken;
function remember(token) {
    bearerToken += token;
    console.log(bearerToken);
}
module.exports.getToken = function getToken(callbackToken) {
    // callbackToken
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
            console.log(token);
            callbackToken(null, token);
            // getTweets(token, null);
        });
    });
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(token, callbackTweets) {
    const bearerToken = Buffer.from(token).toString("base64");
    console.log(bearerToken);
    const options = {
        method: "GET",
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2&tweet_mode=extended",

        headers: {
            Authorization: `Bearer ${token}`,
            // "User-Agent": "My Twitter App v1.0.23",
            // "Accept-Encoding": "gzip",
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
            var tweets = JSON.parse(body);

            callbackTweets(null, tweets);
        });
    });
    req.end();
};

module.exports.filterTweets = function filterTweets(response) {
    var tweetArray = [];
    response.forEach((item) => {
        var link = item.entities.urls[0].url;
        var fullText = item.full_text.replace(link, "");
        var linkProfile = {
            url: link,
            text: fullText,
        };
        if (!linkProfile.text.includes("http")) {
            tweetArray.push(linkProfile);
        }
    });
    return tweetArray;
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
