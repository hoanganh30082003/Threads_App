import express from "express";
import {
	changePassword,
} from "../controller/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();


router.put("/change-password", protectRoute, changePassword);

export default router;
