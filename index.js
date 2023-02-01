const express = require("express");
const app = express();
const product = require("./api/index.js");

app.use(express.json({ extended: false }));

app.use("/api", product);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));