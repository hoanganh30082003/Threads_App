import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' }); // Đường dẫn từ backend/config/connectDB.js ra thư mục root
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process.exit(1);
    }
}
export default connectDB;