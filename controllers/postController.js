import Post from "../models/Post.js";

export const getPostsByCommunity = async (req, res) => {
  const posts = await Post.find({ communityId: req.params.id });
  res.json(posts);
};

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
};
