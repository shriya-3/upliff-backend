// communityModel.js
import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  members: { type: Number, default: 0 },
  created: { type: Date, default: Date.now }
});

const Community = mongoose.model("Community", communitySchema);
export default Community;
