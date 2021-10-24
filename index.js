var express = require("express");
var app = express();

// Database
var mainFeed = [
    {
        "title": "Hello",
        "body": "Hello there",
    },
];


// Home
app.get("/",(req, res) => {
    res.send("Welcome to Medhanit API");
});

// Main Feed
// Sending Main Feed
app.get("/api/mainfeed/send/:title/:body",(req, res) => {
    var newFeed = {
        "title": req.params.title,
        "body": req.params.body,
    }
    mainFeed.push(newFeed);
    res.send(`Message Sent! - ${newFeed}`);
});
// Receiving Main Feed
app.get("/api/mainfeed/receive",(req, res) => {
    res.send(mainFeed);
});

var portNum = process.env.PORT || 7000;
app.listen(portNum, ()=>{
    console.log(`Server listening on port ${portNum}`);
});