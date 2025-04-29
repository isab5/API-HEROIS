const express = require("express");
const router = express.Router();

const heroisController = require("../controllers/heroisController");

router.get("/herois", heroisController.getAllHerois);router.get("/herois/:id", heroisController.getHeroi);
router.post("/herois", heroisController.createHeroi);
router.put("/herois/:id", heroisController.updateHeroi);
router.delete("/herois/:id", heroisController.deleteHeroi);

module.exports = router;