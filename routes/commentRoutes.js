import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// Get comments for a post
router.get("/:postId/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({ created: 1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a comment to a post
router.post("/:postId/comments", async (req, res) => {
  const { author, body } = req.body;

  try {
    const newComment = await Comment.create({
      postId: req.params.postId,
      author,
      body,
    });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
