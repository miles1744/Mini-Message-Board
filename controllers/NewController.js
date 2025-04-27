module.exports = {
    get: (req, res) => {
        res.render("new", {
            title: "Mini Message Board",
            messages: [
              { user: "Amando", text: "Hi there!", added: new Date() },
              { user: "Charles", text: "Hello world", added: new Date() }
            ]
        });
    }
};