const express = require("express");
const router = express.Router();



const controller = require("../controllers/NewController.js")

router.get("/new", controller.get)

module.exports = router;