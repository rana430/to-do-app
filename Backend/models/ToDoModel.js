const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: { type: String },
  dueDate: { type: Date },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  status: { type: String, default: "pending" },
  isLate: { type: Boolean, defult: false }
});

module.exports = mongoose.model("ToDo", toDoSchema);
