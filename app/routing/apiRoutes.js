var profiles = require("../data/friends");

module.exports = function(app) {

    // GET API Friends Route
    app.get("/api/friends", (req, res) => {
        return res.json(profiles);
    });

    app.post("/api/friends", (req, res) => {

        var newProfile = req.body;
        var profileTotals = [];
        var sumTotals = [];
        var matched;

        profileTotal();

        function profileTotal() {
            for (let j = 0; j < profiles.length; j++) {

                var compareTotals = [];

                for (let i = 0; i < 10; i++) {
                    if (profiles[j].scores[i] > newProfile.scores[i] || profiles[j].scores[i] === newProfile.scores[i]) {
                        compareTotals.push(profiles[j].scores[i] - newProfile.scores[i]);
                    }
                    else {
                        compareTotals.push(newProfile.scores[i] - profiles[j].scores[i]);
                    }
                }

                console.log("HERE");
                profileTotals.push(compareTotals);
                sumTotal();
            }
        }

        function sumTotal() {

            for (let i = 0; i < profileTotals.length; i++) {
                sumTotals[i] = profileTotals[i].reduce((a, b) => a + b, 0);
            }

            match();
        }

        function match() {

            matched = sumTotals[0];

            for (let i = 0; i < sumTotals.length; i++) {

                if (sumTotals[i] > matched) {
                    matched = sumTotals[i];
                }
            }

            matched = sumTotals.indexOf(matched);
        }

        console.log(sumTotals);
        console.log(matched);
        profiles.push(newProfile);
        return res.json(profiles[matched]);
    });
};