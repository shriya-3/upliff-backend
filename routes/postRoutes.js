import express from "express";
const router = express.Router();

// In-memory posts data
let posts = [
  {
    id: 1,
    communityId: 1,
    title: "Tips for coping with stress",
    author: "Alice",
    body: "Try deep breathing exercises.",
    comments: [
      { id: 1, user: "Bob", text: "Thanks, this helped me!" }
    ]
  },
  {
    id: 2,
    communityId: 2,
    title: "Managing homework load",
    author: "Charlie",
    body: "Break tasks into small chunks.",
    comments: []
  }
];

// --------------------
// Get posts for a community
// --------------------
router.get("/:communityId", (req, res) => {
  const communityPosts = posts.filter(
    (p) => p.communityId === parseInt(req.params.communityId)
  );
  res.json(communityPosts);
});

// --------------------
// Create a new post in a community
// --------------------
router.post("/:communityId", (req, res) => {
  const { title, author, body } = req.body;
  if (!title || !author || !body) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newPost = {
    id: posts.length + 1,
    communityId: parseInt(req.params.communityId),
    title,
    author,
    body,
    comments: []
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// --------------------
// Add a comment to a post
// --------------------
router.post("/:postId/comments", (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).json({ message: "Both user and text are required" });
  }

  const post = posts.find((p) => p.id === parseInt(req.params.postId));
  if (!post) return res.status(404).json({ message: "Post not found" });

  const newComment = { id: post.comments.length + 1, user, text };
  post.comments.push(newComment);

  res.status(201).json(newComment);
});

export default router;
