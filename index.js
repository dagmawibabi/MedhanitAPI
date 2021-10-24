var express = require("express");
var app = express();

// Database
var mainFeed = [
    {
        "title": "Hello",
        "body": "Hello there",
        "image": 0,
        "music": "https://www.youtube.com/watch?v=cHTEGQbtP1I",
        "from": "Dagmawi Babi",
    },
];

var background = ["https://i.pinimg.com/564x/b4/b2/22/b4b222b408f29041573218477bd457a6.jpg"];

// Home
app.get("/",(req, res) => {
    res.send("Welcome to Medhanit API");
});

// Main Feed
// Sending Main Feed
app.get("/api/mainfeed/send/:title/:body/:image/:music/:from",(req, res) => {
    var newFeed = {
        "title": req.params.title,
        "body": req.params.body,
        "image": req.params.image,
        "music": req.params.music,
        "from": req.params.from,
    }
    mainFeed.push(newFeed);
    res.send(`Message Sent! - ${newFeed}`);
});
// Receiving Main Feed
app.get("/api/mainfeed/receive",(req, res) => {
    res.send(mainFeed);
});

// Send BG
app.get("/api/mainfeed/background/send/:link",(req, res) => {
    background = req.params.link;
    res.send("Background Sent!");
});

// Get BG 
app.get("/api/mainfeed/background/receive",(req, res) => {
    res.send(background);
});


var portNum = process.env.PORT || 7000;
app.listen(portNum, ()=>{
    console.log(`Server listening on port ${portNum}`);
});