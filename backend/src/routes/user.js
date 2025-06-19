import express from "express";
import { getProfileById, getAllProfiles } from "../controllers/user.js";
import { verifyToken } from "../middleware/authorization.js";

const userRouter = express.Router();

userRouter.get("/", getAllProfiles);
userRouter.get("/:id", getProfileById);

export default userRouter;
