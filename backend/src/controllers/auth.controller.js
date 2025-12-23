import { generateTocken } from "../lib/utils.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({ MessageChannel: "all fileds are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({
        MessageChannel: "password must be at least 6 characters long",
      });
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ MessageChannel: "invalid email format" });
    }

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ MessageChannel: "email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullname,
      email,
      password: hashedpassword,
    });

    if (newUser) {
      generateTocken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profilepic: newUser.profilepic,
      });
    } else {
      res.status(400).json({ Message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ MessageChannel: "internal server error" });
  }
}
