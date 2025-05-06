const db = require("../db/messages");

module.exports = {
    get: (req, res) => {
        const messages = db.getAllMessages()
        res.render("index",{
                title: "Mini Message Board",
                messages
            }
        );
    }
};