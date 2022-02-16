//title , content, author, slug(url) , time stamp

const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: {},
      required: true,
    },
    author: {
      type: String,
      default: "Admin",
    },
    slug: {
      type: String,
      lowercase: true, //adjust to lowercase
      unique: true, // detect duplicate
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", blogSchema);
