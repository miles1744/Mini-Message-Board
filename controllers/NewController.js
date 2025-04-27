const messages = require("../models/messages.js")

module.exports = {
    get: (req, res) => {
        res.render("new");
    },

    post: (req, res) => {
        messages.push({ text: messageText, user: messageUser, added: new Date() });
    }
};