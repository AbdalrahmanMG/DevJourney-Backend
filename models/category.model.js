const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["Historical Adventures", "Biographical Tales"],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
