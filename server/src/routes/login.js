import express from "express";
const router = express.Router();
import { User } from "../models/user.js";


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      console.log("found user now enter home")
      res.status(200).send({
        success: true,
        messgae: "login successfully",
        user,
      });
    } else {
      console.log("Invalid credentials")
    }
  } catch (error) {
    console.log(error)
  }
});

export { router as loginRouter };
