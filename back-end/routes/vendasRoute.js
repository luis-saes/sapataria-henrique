const express = require("express");
const router = express.Router();
vendasRoute = require("../controllers/vendasController");

router.get("/", vendasRoute.vendasController);

module.exports = router;
