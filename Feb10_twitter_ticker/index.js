const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");
const fs = require("fs");

app.use(express.static("./ticker"));
// need to figure out how this works

app.get("/data.json", (req, res) => {
    console.log("requiring");
    // getToken();
    getToken((err, token) => {
        if (err) {
            console.log(err);
        } else {
            getTweets(token, (err, tweets) => {
                if (err) {
                    console.log(err);
                } else {
                    filterTweets(tweets);
                    const filteredTweets = filterTweets(tweets);
                    res.json(filteredTweets);
                }
            });
        }
    });
    // getTweets(filterTweets);
    // getToken((err, bearerToken) => {
    //     if (err) {
    //         console.log(err);
    //         res.sendStatus(500);
    //     } else {
    //         console.log(bearerToken);
    // getTweets(bearerToken, (err, tweets) => {
    //     const filteredTweets = filterTweets(tweets);
    //     res.json(filterTweets);
});

app.listen(8080, () => console.log("hi"));
