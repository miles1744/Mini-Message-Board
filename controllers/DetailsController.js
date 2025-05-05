const db = require("../db/messages");


module.exports = {
    get: async (req, res) => {
        const id = parseInt(req.params.id);
        try {
            const messages = await db.getMessageById(id); 
            const message = messages[0];

            if (!message) {
                return res.status(404).send("Message not found");
            }

            res.render("message", {
                title: "Mini Message Board",
                message
            });
        } catch (err) {
            console.error("Error fetching message:", err);
            res.status(500).send("Server error");
        }
    }
};