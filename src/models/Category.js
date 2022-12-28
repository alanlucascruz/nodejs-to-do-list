const mongoose = require("mongoose");

const types = mongoose.Schema.Types;

const Category = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  user: {
    type: types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Category", Category);
