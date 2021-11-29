const express = require("express");
const router = express.Router();
funcionariosRoute = require("../controllers/funcionariosController");

router.get("/", funcionariosRoute.funcionariosGet);
router.post("/", funcionariosRoute.funcionariosPost);
router.delete("/", funcionariosRoute.funcionariosDelete);
router.put("/", funcionariosRoute.funcionariosUpdate);

module.exports = router;
