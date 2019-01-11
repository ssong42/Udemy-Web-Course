const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello!");
})

app.get('/r/:subredditName', (req, res) => {
    res.send(`Welcome to the \"${req.params.subredditName}\" subreddit!`);
})

app.get('/r/:subredditName/:comment/:id/:title', (req, res) => {
    res.send("")
})

app.get('*', (req, res) => {
    res.send("You are a *!");
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("LISTENING NOW...")
});