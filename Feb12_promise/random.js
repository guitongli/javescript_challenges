const express = require("express");
const app = express();
const secrets = require(".secrets");
const https = require("https");
const { key, secret } = secrets;

// need to figure out how prettier works


    let credentials = `${key}:${secret}`;
    let encodedCredentials = Buffer.from(credentials).toString("base64");
    const options = {
        host: "api.twitter,com",
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

https.request(options, (res) => {
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
        var token = JSON.parse(body).token_type;
        console.log(token);
    });
    req.end();
}
