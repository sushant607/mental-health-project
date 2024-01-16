import express from "express";
const router = express.Router();
import { User } from "../models/user.js";

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving user to the database' });
  }
});

export { router as userRouter };
