const messages = require("../db/messages.js")

module.exports = {
    get: (req, res) => {
        res.render("new");
    },

    post: (req, res) => {

        const lastMessage = messages[messages.length - 1];
        const newId = lastMessage ? lastMessage.id + 1 : 1;

        messages.push({ id:newId, text: req.body.text, user: req.body.user, added: new Date() });
        res.redirect("/");
    }
};