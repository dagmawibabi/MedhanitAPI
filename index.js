let express = require("express");
let app = express();

let chats = [
    {
        from: "Server",
        message: "📪",
        date: "1634997427169",
    },
    {
        from: "Server",
        message: "You have no messages!",
        date: "1634997427169",
    }
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
        date: Date.now(),
    };
    chats.push(newMessage);
    res.send(`Message Sent! - \n \t ${newMessage}`);
});

// Clear chat
app.get("/api/chats/clearAll",(req, res) => {
    chats = [
        {
            from: "Server",
            message: "📪",
            date: "1634997427169",
        },
        {
            from: "Server",
            message: "You have no messages!",
            date: "1634997427169",
        }
    ];
});


// Port
let portNum = process.env.PORT || 7000;
app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
})


