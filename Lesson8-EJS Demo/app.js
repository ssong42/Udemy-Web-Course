const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("dogs")
});

app.get('/fallinlovewith/:thing', (req, res) => {
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
    });
    
app.get('/posts', (req, res) => {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "adorable Puppy", author: "Josh"},
        {title: "doggy", author: "Bobby"}
        ];
        
    res.render('posts', {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, (req, res) => {
    console.log("Listening NOW...")
});

