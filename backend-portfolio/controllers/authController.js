// controllers/authController.js
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      email,
      password,
      role,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { registerUser, authUser };
