// src/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/db.js";
import router from "./routes/index.js";

dotenv.config();

// Kết nối MongoDB
connectDB();
app.use(cors());
app.use(express.json());

// Cấu hình CORS chính xác cho frontend ở cổng 5173
app.use(
  cors({
    origin: "http://localhost:5173", // 👈 Cho phép từ FE
    credentials: true, // Nếu bạn dùng cookie/token
  })
);

// Router
app.use("/", router);

// Khởi động server
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

export default app;
