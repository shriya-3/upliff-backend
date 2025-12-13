import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    communityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
      required: true,
    },
    title: String,
    body: String,
    author: String,
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
