// controllers/communityController.js
import Community from "../models/communityModel.js"; // Make sure this exists

// Get all communities
export const getCommunities = async (req, res) => {
  try {
    const communities = await Community.find(); // or mock data if no DB
    res.json(communities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single community by id
export const getCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }
    res.json(community);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
