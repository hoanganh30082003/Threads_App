import bcrypt from "bcryptjs";
import User from "../model/userModel.js"


const changePassword = async (req, res) => {
	try {
		const userId = req.user._id;
		const { currentPassword, newPassword } = req.body;
		const user = await User.findById(userId);

		if (!user) return res.status(404).json({ error: "User not found" });

		const isMatch = await bcrypt.compare(currentPassword, user.password);
		if (!isMatch) return res.status(400).json({ error: "Current password is incorrect" });

		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(newPassword, salt);
		await user.save();

		res.status(200).json({ message: "Password changed successfully" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export {
	changePassword,
};
