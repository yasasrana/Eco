import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {} from "dotenv/config";

const userController = {
  //get user
  getOneUser: async (req, res) => {   //GET request to retrieve a single user's data from a MongoDB database using their ID.
    const id = req.params.id;
    try {
      const user = await User.findOne({ _id: id }); //find the user with the specified ID.
      res.json({ message: "User fetch success", data: user });
    } catch (err) {
      return res.status(500).json({ message: err.message }); //500 status code along with an error message in JSON format.
    }
  },

  //get all users
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json({ message: "Users fetch success", data: users });
    } catch (err) {
      return res.status(500).json({ message: err.message }); //
    }
  },
//user login
login: async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {  
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      userName: user.userName,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ msg: "Invalid credentials" });
  }
},

};


//genarte token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default userController;
