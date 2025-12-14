import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/database.js";

import communityRoutes from "./routes/communityRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
await connectDB();

// API Routes
app.use("/api/communities", communityRoutes);
app.use("/api/communities/:id/posts", postRoutes);
app.use("/api/posts/:postId/comments", commentRoutes);

// Serve React frontend (build folder)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
