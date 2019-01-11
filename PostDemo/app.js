const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var friends = ["steven", "josh", "matt", "david"];

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/friends", (req, res) => {
    res.render("friends", {friends: friends});
});

app.post("/addfriend", (req, res) => {
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("friends");
})

app.listen(process.env.PORT, process.env.IP, (req, res) => {
    console.log("Listening Now...");
});