const express = require("express");
const router = express.Router();



const controller = require("../controllers/IndexController.js")

router.get("/", controller.get)

module.exports = router;