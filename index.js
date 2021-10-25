var express = require("express");
var app = express();

// Database
// Main Feed
var mainFeed = [
    {
        "title": "Hello",
        "body": "Hello there",
        "image": 0,
        "music": "https://www.youtube.com/watch?v=cHTEGQbtP1I",
        "from": "Dagmawi Babi",
    },
];
var background = {"link": "https://i.pinimg.com/564x/b4/b2/22/b4b222b408f29041573218477bd457a6.jpg"};

// Mood Feed
var colorCode = [
    {
        "color": "Colors.green",
        "meaning": "Means I'm feeling planty",
    },
    {
        "color": "Colors.yellow",
        "meaning": "Means I'm feeling yellowy",
    },
    {
        "color": "Colors.red",
        "meaning": "Means I killed someone",
    },
];
var curColorMood = ["Colors.green"];


// Home
app.get("/",(req, res) => {
    res.send("Welcome to Medhanit API");
});


app.get("/api/moodfeed/sendcolor/:id", (req, res) => {
    res.send(`Sent color! - ${colorCode[req.params.id]}`);
});
app.get("/api/moodfeed/sendcolorcode", (req, res) => {
    colorCode = [
        {
            "color": "Colors.green",
            "meaning": "Means I'm feeling planty",
        },
    ];
    res.send(colorCode);
});

app.get("/api/moodfeed/receivecolor", (req, res) => {
    res.send(curColorMood);
});
app.get("/api/moodfeed/receivecolorcode", (req, res) => {
    res.send(colorCode);
});



// Main Feed
// Clear feed
app.get("/api/mainfeed/clearall", (req, res) => {
    mainFeed = [
        {
            "title": "Hello",
            "body": "Hello there",
            "image": 0,
            "music": "https://www.youtube.com/watch?v=cHTEGQbtP1I",
            "from": "Dagmawi Babi",
        }
    ];
    res.send("Cleared feed!");
});
// Sending Main Feed
app.get("/api/mainfeed/send",(req, res) => {
    var newFeed = {
        "title": req.query.title,
        "body": req.query.body,
        "image": req.query.image,
        "music": req.query.music,
        "from": req.query.from,
    }
    mainFeed.push(newFeed);
    console.log("here");
    //res.send(req.query.title);
    res.send(`Message Sent! - ${newFeed}`);
});
// Receiving Main Feed
app.get("/api/mainfeed/receive",(req, res) => {
    res.send(mainFeed);
});
// Send BG
app.get("/api/mainfeed/background/send",(req, res) => {
    background["link"] = req.query.link;
    res.send("Background Sent!");
});
// Get BG 
app.get("/api/mainfeed/background/receive",(req, res) => {
    res.send(background);
});




// Server
var portNum = process.env.PORT || 7000;
app.listen(portNum, ()=>{
    console.log(`Server listening on port ${portNum}`);
});