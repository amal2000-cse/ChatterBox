import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    //here we are saying to return all the users id except the id of the logged in user id
    const filteredUser = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res.status(200).json(filteredUser);

  } catch (error) {
    console.log("Error in getUserForSideBar: " + error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
