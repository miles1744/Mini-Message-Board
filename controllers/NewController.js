module.exports = {
    get: (req, res) => {
        res.render("new");
    },

    post: (req, res) => {
        console.log(req.body)
    }
};