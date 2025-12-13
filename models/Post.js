import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  communityId: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
  title: String,
  author: String,
  body: String,
  comments: [
    {
      user: String,
      text: String,
    },
  ],
});

export default mongoose.model("Post", postSchema);
