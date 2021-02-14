const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));
// need to figure out how this works
console.log(getTweets);
app.get("/data.json", (req, res) => {
    console.log("requiring");

    getToken()
        .then(function (token) {
            return Promise.all([
                getTweets(token, "bbcworld"),
                getTweets(token, "AJEnglish"),
                getTweets(token, "reuters"),
            ]);
        })

        .then(function (tweets) {
            const bbc = filterTweets(tweets[0]);
            const aj = filterTweets(tweets[1]);
            const rt = filterTweets(tweets[2]);
            const mergedArray = [...bbc, ...aj, ...rt];
            console.log(mergedArray);
            const sortedArray = mergedArray.sort((a, b) => {
                return new Date(b.time) - new Date(a.time);
            });
            res.json(sortedArray);
        })
        .catch(function (err) {
            console.log(err);
            res.sendStatus(500);
        });
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
// });

app.listen(8080, () => console.log("hi"));
