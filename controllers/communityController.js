import Community from "../models/Community.js";

export const getCommunities = async (req, res) => {
  const communities = await Community.find();
  res.json(communities);
};

export const getCommunity = async (req, res) => {
  const community = await Community.findById(req.params.id);
  res.json(community);
};
