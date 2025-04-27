const messages = require("../models/messages.js")



module.exports = {
    get: (req, res) => {
        const id = parseInt(req.params.id);

        const message = messages.find(m => m.id === id);
        
        res.render("message", {
            title: "Mini Message Board",
            message
        });
    }
};