const express = require("express");
const router = express.Router();
funcionariosRoute = require("../controllers/funcionariosController");

router.get("/", funcionariosRoute.funcionariosController);

module.exports = router;
