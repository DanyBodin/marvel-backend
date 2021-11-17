const mongoose = require("mongoose");

const Characters = mongoose.model("Characters", {
  thumbnail: Object,
  comics: Array,
  name: String,
  description: String,
});

module.exports = Characters;
