var express = require("express");
var app = express();

// Database
// Main Feed
var mainFeed = [
    {
        "title": "Hello",
        "body": "Hello there",
        "image": 0,
        "music": 0,
        "from": "Dagmawi Babi",
    },
    {
        "title": "Tenerife Sea",
        "body": "This is one of my fav songs. I hope you like it!",
        "image": 0,
        "music": "https://www.youtube.com/watch?v=cHTEGQbtP1I",
        "from": "Dagmawi Babi",
    },
    {
        "title": "A Picture Of Us",
        "body": "Here's an aesthetic picture of us!",
        "image": "https://i.pinimg.com/236x/d3/9e/93/d39e9397c8d078914a27745e4bb203a7.jpg",
        "music": "https://www.youtube.com/watch?v=Wv2rLZmbPMA",
        "from": "Dagmawi Babi",
    },
];
var background = {"link": "https://i.pinimg.com/564x/b4/b2/22/b4b222b408f29041573218477bd457a6.jpg"};

// Mood Feed
var colorCode = [
    {
        "color": "Blue",
        "meaning": "Means I'm feeling bluey",
    },
    {
        "color": "Cyan",
        "meaning": "Means I'm feeling cyany",
    },
    {
        "color": "Green",
        "meaning": "Means I'm feeling planty",
    },
    {
        "color": "Yellow",
        "meaning": "Means I'm feeling yellowy",
    },
    {
        "color": "Red",
        "meaning": "Means I killed someone",
    },
];
var curColorMood = ["0xff789461"];
var colorTitle = ["Color Code"];

// Home
app.get("/",(req, res) => {
    res.send("Welcome to Medhanit API");
});

// Send Color
app.get("/api/moodfeed/sendcolor/", (req, res) => {
    curColorMood[0] = req.query.color;
    res.send(`Sent color! - ${curColorMood}`);
});
// Send Color title
app.get("/api/moodfeed/sendcolortitle", (req, res) => {
    colorTitle = [
        req.query.title
    ];
    res.send(colorTitle);
});
// Send Color Code
app.get("/api/moodfeed/sendcolorcode", (req, res) => {
    colorCode = [
        {
            "color": req.query.color,
            "meaning": req.query.meaning,
        },
    ];
    res.send(colorCode);
});
// Update Color Code
app.get("/api/moodfeed/updatecolorcode", (req, res) => {
    var newColorCode = {
            "color": req.query.color,
            "meaning": req.query.meaning,
        };
    colorCode.push(newColorCode);
    res.send(colorCode);
});
// Clear ALL Color
app.get("/api/moodfeed/clearall", (req, res) => {
    curColorMood = [""];
    colorTitle = [""];
    colorCode = [];
    res.send("Cleared Color Code!");
});


// Get Color Title
app.get("/api/moodfeed/receivecolortitle", (req, res) => {
    res.send(colorTitle);
});
// Get Color
app.get("/api/moodfeed/receivecolor", (req, res) => {
    res.send(curColorMood);
});
// Get Color Code
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