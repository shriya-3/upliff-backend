import express from "express";
import mongoose from "mongoose";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js"; // make sure this exists

const router = express.Router({ mergeParams: true }); // important for parent route params

// 🔹 Get all posts for a community with comment counts
router.get("/", async (req, res) => {
  try {
    const communityId = new mongoose.Types.ObjectId(req.params.id);

    const posts = await Post.aggregate([
      { $match: { communityId } },
      { $sort: { created: -1 } }, // newest first
      {
        $lookup: {
          from: "comments", // MongoDB collection name
          localField: "_id",
          foreignField: "postId",
          as: "comments",
        },
      },
      {
        $addFields: {
          commentsCount: { $size: "$comments" }, // add comment count
        },
      },
      { $project: { comments: 0 } }, // remove actual comments for list
    ]);

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// 🔹 Create a post
router.post("/", async (req, res) => {
  try {
    const post = await Post.create({
      communityId: new mongoose.Types.ObjectId(req.params.id),
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🔹 Get a single post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // optionally include comments if you want on single post page
    const comments = await Comment.find({ postId: post._id }).sort({ created: 1 }); // oldest first
    res.json({ ...post.toObject(), comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
