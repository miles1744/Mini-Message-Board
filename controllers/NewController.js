const messages = require("../models/messages.js")

module.exports = {
    get: (req, res) => {
        res.render("new");
    },

    post: (req, res) => {
        messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
        res.redirect("/");
    }
};