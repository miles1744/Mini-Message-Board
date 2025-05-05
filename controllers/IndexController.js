const db = require("../db/messages");

module.exports = {
    get: (req, res) => {
        res.render("index",{
                title: "Mini Message Board",
                messages
            }
        );
    }
};