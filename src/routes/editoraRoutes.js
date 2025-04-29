const express = require("express");
const router = express.Router();

const editoraController = require("../controllers/editoraController");
const apiKeyMiddleware =  require("../config/apiKey")

router.use(apiKeyMiddleware);

router.get("/editora", editoraController.getAllEditoras);router.get("/editora/:id", editoraController.getEditora);
router.post("/editora", editoraController.createEditora);
router.put("/editora/:id", editoraController.updateEditora);
router.delete("/editora/:id", editoraController.deleteEditora);

module.exports = router;