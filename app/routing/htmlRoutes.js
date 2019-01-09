const path = require("path");

module.exports = function(app) {

    // Surevey HTML Page
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Catch-All Home HTML Page
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};