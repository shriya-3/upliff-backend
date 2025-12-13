import mongoose from "mongoose";
import dotenv from "dotenv";
import Community from "./models/communityModel.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.error(err));

const communities = [
  { id: 1, name: "Coping Skills", description: "Learn coping skills", image: "/coping.png", "members": 10, "created": "2025-12-12T10:00:00Z" },
  { id: 2, name: "Academic Pressures", description: "Handle school stress", image: "/school.png", "members": 5, "created": "2025-12-12T10:00:00Z" },
  { id: 3, name: "Anxiety Management", description: "Tips for managing anxiety", image: "/anxiety.png", "members": 8, "created": "2025-12-12T10:00:00Z" },
  { id: 4, name: "Relationships", description: "Navigating people + emotions", image: "/relationships.png", "members": 12, "created": "2025-12-12T10:00:00Z" },
  { id: 5, name: "Mindfulness", description: "Calming practices + growth", image: "/practices.png", "members": 7, "created": "2025-12-12T10:00:00Z" },
];

const seed = async () => {
  await Community.deleteMany(); // optional: clear existing data
  await Community.insertMany(communities);
  console.log("Data seeded!");
  mongoose.disconnect();
};

seed();
