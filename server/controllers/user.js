import User from "../models/user.js";

import {} from "dotenv/config";

const userController = {
  //get user
  getOneUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findOne({ _id: id });
      res.json({ message: "User fetch success", data: user });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  //get all users
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json({ message: "Users fetch success", data: users });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
}

export default userController;
