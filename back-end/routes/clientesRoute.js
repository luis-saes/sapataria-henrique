const express = require("express");
const router = express.Router();
clientesRoute = require("../controllers/clientesController");

router.get("/", clientesRoute.clientesController);

module.exports = router;
