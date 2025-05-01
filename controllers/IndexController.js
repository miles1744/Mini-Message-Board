const messages = require("../models/messages.js")

module.exports = {
    get: (req, res) => {
        res.render("index",{
                title: "Mini Message Board",
                messages
            }
        );
    }
};