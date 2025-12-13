import express from "express";
import cors from "cors";

import postRoutes from "./routes/postRoutes.js";
const app = express();


app.use("/api/posts", postRoutes);


app.use(cors());
app.use(express.json());

const communities = [
  { id: 1, name: "Coping Skills", description: "Learn coping skills", image: "/coping.png" },
  { id: 2, name: "Academic Pressures", description: "Handle school stress", image: "/school.png" },
  { id: 3, name: "Anxiety Management", description: "Tips for managing anxiety", image: "/anxiety.png" },
  { id: 4, name: "Relationships", description: "Navigating people + emotions", image: "/relationships.png" },
  { id: 5, name: "Mindfulness", description: "Calming practices + growth", image: "/practices.png" },

];

app.get("/api/communities", (req, res) => {
  res.json(communities);
});

app.listen(5000, () => console.log("Server running on port 5000"));
