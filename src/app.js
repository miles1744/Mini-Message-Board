const express = require("express");

const app  = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const indexRoute = require("./routes/Index.js");
const newRoute = require("./routes/new.js");

app.use("/new", newRoute);
app.use("/", indexRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000")
})