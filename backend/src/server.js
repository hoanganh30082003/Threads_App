import express from "express";
import connectDB from "../config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();
connectDB();
app.use(cors());
app.use(express.json()); 

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

