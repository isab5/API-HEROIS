require("dotenv").config();
const express = require("express");
const cors = require("cors");
const editoraRoutes = require("./src/routes/editoraRoutes");
const heroisRoutes = require("./src/routes/heroisRoutes");
const path = require("path");
const reportRoutes = require("./src/routes/reportRoutes")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", editoraRoutes)
app.use("/api", heroisRoutes)
app.use("/api", reportRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🦇 Servidor rodando em http://localhost:${PORT}`);
});
