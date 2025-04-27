const express = require("express");

const app  = express();

app.set("view engine", "ejs");



const indexRoute = require("./routes/index.js");
const newRoute = require("./routes/new.js")


app.use("/", indexRoute)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})