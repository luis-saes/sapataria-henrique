const express = require("express");
const router = express.Router();
const loginRoute = require("../controllers/loginController");

router.post("/", loginRoute.loginGet);

module.exports = router;
