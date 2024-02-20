const mongoose = require("mongoose");

// const Schema =mongoose.Schema

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    User_id: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Historical", "Biographical"],
    },
  },
  // for automatic createdAt and updatedAt
  { timestamps: true }
);

const Post = mongoose.model("Post111", postSchema);

module.exports = Post;
