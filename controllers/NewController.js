const db = require("../db/messages.js")

module.exports = {
    get: (req, res) => {
        res.render("new");
    },

    post: (req, res) => {
        db.insertMessage(req.body.text, req.body.user);
        res.redirect("/");
    }
};