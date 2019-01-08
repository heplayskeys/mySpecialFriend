const express = require("express");
const path = require("path");

var profiles = require("./app/data/friends");
var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Surevey HTML Page
app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

// GET API Friends Route
app.get("/api/friends", (req, res) => {
    return res.json(profiles);
});

app.post("/api/friends", (req, res) => {
    var newProfile = req.body;
    console.log(newProfile);
});

// Catch-All Home HTML Page
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});