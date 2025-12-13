import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    community: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
      required: true,
    },
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

const Post = mongoose.model("Post", postSchema);

export default Post;
