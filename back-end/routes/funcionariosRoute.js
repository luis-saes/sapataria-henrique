const express = require("express");
const router = express.Router();
funcionariosRoute = require("../controllers/funcionariosController");

router.get("/", funcionariosRoute.funcionariosGet);
router.post("/", funcionariosRoute.funcionariosPost);
router.delete("/", funcionariosRoute.funcionariosDelete);

module.exports = router;
