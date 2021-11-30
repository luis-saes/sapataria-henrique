const express = require("express");
const router = express.Router();
vendasRoute = require("../controllers/vendasController");

router.get("/", vendasRoute.vendasGet);
router.post("/", vendasRoute.vendasPost);
router.delete("/", vendasRoute.vendasDelete);
router.put("/", vendasRoute.vendasUpdate);

module.exports = router;
