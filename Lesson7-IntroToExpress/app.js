const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello!");
})

app.get('*', (req, res) => {
    res.send("You are a *!");
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("LISTENING NOW...")
});
