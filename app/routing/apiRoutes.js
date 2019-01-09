var profiles = require("../data/friends");

module.exports = function(app) {

    // GET API Friends Route
    app.get("/api/friends", (req, res) => {
        return res.json(profiles);
    });

    app.post("/api/friends", (req, res) => {
        var newProfile = req.body;
        
        profiles.push(newProfile);

        res.status(200).end();
    });
};