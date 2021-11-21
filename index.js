const express = require("express");
const formidableMiddleware = require("express-formidable");
const axios = require("axios");

const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(formidableMiddleware());
app.use(cors());

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.SERVER_URI}/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.SERVER_URI}/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/comics/charactersid", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.SERVER_URI}/comics/characters:id?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("server up and running");
});
