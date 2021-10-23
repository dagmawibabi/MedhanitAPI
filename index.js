let express = require("express");
let app = express();

let chats = [
    {
        from: "Dagmawi",
        message: "Hey Man!!!",
        date: "1634997427169"
    },
    {
        from: "Babi",
        message: "What up!!!",
        date: "1634997427769"
    },
]

// Welcome Screen
app.get("/",(req, res) => {
    res.send("Welcome to simple chat!");
});

// Retrieve all chats in DB
app.get("/api/chats",(req, res) => {
    res.send(chats);
});

// Retrieve single chat from DB
app.get("/api/chats/:id",(req, res) => {
    res.send(chats[req.params.id]);
});


// Method to send message
app.get("/api/chats/:sender/:message",(req, res) => {
    let newMessage = {
        from: req.params.sender,
        message: req.params.message,
    };
    chats.push(newMessage);
    res.send(`Message Sent! - \n \t ${newMessage}`);
});

// Port
let portNum = process.env.PORT || 7000;
app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
})


