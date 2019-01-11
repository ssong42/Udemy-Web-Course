const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Welcome to the assignment!");
});

app.get('/speak/:animal', (req, res) => {
    if (req.params.animal.toLowerCase() === "pig") {
        res.send("The pig says Oink!");
    }
    else if (req.params.animal.toLowerCase() === "cow") {
        res.send("The cow says Moo!");
    }
    else if (req.params.animal.toLowerCase() === "dog") {
        res.send("The dog says Bark!")
    }
    else
        res.send("Not a valid animal!");
})

app.get('/repeat/:text/:number', (req, res) => {
    var number = parseInt(req.params.number);
    var text = req.params.text;
    var string = "";
        
    while (number > 0) {
        string = string.concat(`${text} `);
        number -= 1;
    }
    res.send(string);
})

app.get('*', (req, res) => {
    res.status(400).send("WHAT ARE YOU DOING!");
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Now listening...")
})