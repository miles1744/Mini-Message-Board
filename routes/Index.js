const express = require("express");
const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  


const controller = require("../controllers/IndexController")

router.get("/", controller.get)

module.exports = router;