import express from "express";
import bcryptjs from "bcryptjs";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
const router = express.Router();
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    console.log("User already exists");
    return res.json({ message: "User already exists" });
  }
  const hashpwd = await bcryptjs.hash(password, 5);
  const newUer = new User({
    email,
    password: hashpwd,
    username,
  });
  await newUer.save();
  return res.json({ status: true, Message: "Signup successful" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log("No user found");
    return res.json({ Message: "No user Found" });
  }
  const pwd = bcryptjs.compare(password, user.password);
  if (!pwd) {
    return res.json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ username: User.username }, process.env.JWT_KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "Login successfully" });
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.json({ message: "User not found" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
      expiresIn: "5m",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ananykhare04@gmail.com",
        pass: "dwfd azor egtr hrpg",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: email,
      subject: "Reset Pssword",
      text: `http://localhost:3001/resetPassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "Error while sending message" });
      } else {
        return res.json({ status: true, message: "Sent!" });
      }
    });
  } catch (err) {
    return res.json({ message: "Error in nodemailer" });
  }
});
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    const id = decoded.id;
    const hashpwd = await bcryptjs.hash(password, 5);
    await User.findByIdAndUpdate({ _id: id }, { password: hashpwd });
    return res.json({ status: true, message: "updated record" });
  } catch (err) {
    return res.json({ message: "error" });
  }
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json("Error with token");
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "authorized" });
});

export { router as UserRouter };
