const express = require("express");
const router = express.Router();

const heroisController = require("../controllers/heroisController");
const upload = require("../config/upload.js");

router.get("/herois", heroisController.getAllHerois);router.get("/herois/:id", heroisController.getHeroi);
router.post("/herois", upload.single("photo"),heroisController.createHeroi);
router.put("/herois/:id", heroisController.updateHeroi);
router.delete("/herois/:id", heroisController.deleteHeroi);

module.exports = router;