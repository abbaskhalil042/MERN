const express = require("express");
const app = express();

// Route import
const product = require("./routes/productRoute");

app.use(express.json());

// Prefix the product routes with "/api/v1"
app.use("/api/v1", product);//& i did small mistake and i wonder about 30 mim 💔😬 

module.exports = app;
