import express from "express";
import { getCommunities, getCommunity } from "../controllers/communityController.js";
import postRoutes from "./postRoutes.js";

const router = express.Router();

router.get("/", getCommunities);
router.get("/:id", getCommunity);

// Nested posts route
router.use("/:id/posts", postRoutes);

export default router;
