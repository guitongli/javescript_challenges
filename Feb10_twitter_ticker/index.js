const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));
// need to figure out how this works

function bearerToken(t) {
    console.log(t);
}

app.get("/", (req, res) => {
    console.log("requiring");
    getToken();
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
