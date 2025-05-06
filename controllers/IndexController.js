const db = require("../db/messages");

module.exports = {
    get: async (req, res) => {
        const messages = await db.getAllMessages()
        res.render("index",{
                title: "Mini Message Board",
                messages
            }
        );
    }
};