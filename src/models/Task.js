const mongoose = require("mongoose");

const types = mongoose.Schema.Types;

const Task = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    completed_at: Date,
    category: {
      type: types.ObjectId,
      ref: "Category",
      required: true,
    },
    user: {
      type: types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", Task);
