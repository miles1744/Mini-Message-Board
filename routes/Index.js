const express = require("express");
const router = express.Router();



const controller = require("../controllers/IndexController.js")
const detailsController = require("../controllers/DetailsController.js")



router.get("/", controller.get)
router.get("/:id", detailsController.get)

module.exports = router;