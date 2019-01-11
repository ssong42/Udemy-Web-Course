var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("homepage")
})

app.get('/results', (req, res) => {
    var query = req.query.search;
    var url = `http://www.omdbapi.com/?t=${query}&apikey=thewdb`;
    
    var response = request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("api", {data : data})
        }
    })
});

app.listen(process.env.PORT, process.env.IP, (req, res) => {
    console.log("Movie app is running...");
});