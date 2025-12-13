import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  name: String,
  description: String,
  members: Number,
  created: String,
  image: String,
});

export default mongoose.model("Community", communitySchema);
