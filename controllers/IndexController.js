const messages = require("../models/messages.js")


module.exports = {
    get: (req, res) => {
        res.render("index", {
            title: "Mini Message Board",
            messages: [
              { user: "Amando", text: "Hi there!", added: new Date() },
              { user: "Charles", text: "Hello world", added: new Date() }
            ]
        });
    }
};