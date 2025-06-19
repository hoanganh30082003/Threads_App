import User from "../model/userModel.js";

// const getProfileById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findById(id).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       _id: user._id,
//       name: user.name,
//       username: user.username,
//       email: user.email,
//       bio: user.bio,
//       profilePic: user.profilePic,
//       followers: user.followers.length,
//       following: user.following.length,
//       isFrozen: user.isFrozen,
//       createdAt: user.createdAt,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };
const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
const getAllProfiles = async (req, res) => {
  try {
    console.log("📥 Controller getAllProfiles đang hoạt động");

    const users = await User.find().select("-password");

    console.log("🔍 Số lượng users tìm thấy:", users.length);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { getProfileById, getAllProfiles };
