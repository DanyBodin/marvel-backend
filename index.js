const express = require("express");
const formidableMiddleware = require("express-formidable");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(formidableMiddleware());
app.use(cors());
mongoose.connect("mongodb://localhost/");

app.get("/comics", (req, res) => {});

app.get("/characters", (req, res) => {});

app.get("/", (req, res) => {
  res.send("Welcome to MarvelWorld");
});

app.listen(3000, () => {
  console.log("server up and running");
});
