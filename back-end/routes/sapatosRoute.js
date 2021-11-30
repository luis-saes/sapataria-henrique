const express = require("express");
const router = express.Router();
sapatosRoute = require("../controllers/sapatosController");

router.get("/", sapatosRoute.sapatosGet);
router.post("/", sapatosRoute.sapatosPost);
router.delete("/", sapatosRoute.sapatosDelete);
router.put("/", sapatosRoute.sapatosUpdate);

module.exports = router;
