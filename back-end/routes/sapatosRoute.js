const express = require("express");
const router = express.Router();
sapatosRoute = require("../controllers/sapatosController");

router.get("/", sapatosRoute.get);

module.exports = router;
