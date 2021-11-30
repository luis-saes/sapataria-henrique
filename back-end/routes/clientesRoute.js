const express = require("express");
const router = express.Router();
clientesRoute = require("../controllers/clientesController");

router.get("/", clientesRoute.clientesGet);
router.post("/", clientesRoute.clientesPost);
router.delete("/", clientesRoute.clientesDelete);
router.put("/", clientesRoute.clientesUpdate);

module.exports = router;
