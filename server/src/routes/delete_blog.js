import express from "express";
const router = express.Router();
import { Blog } from "../models/blog.js";

router.delete('/Blogdelete', async (req, res) => {
    try {
      const blog = await Blog
        .findByIdAndDelete(req.params.id)
        .populate("user");
      await blog.user.blogs.pull(blog);
      await blog.user.save();
      return res.status(200).send({
        success: true,
        message: "Blog Deleted!",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Erorr WHile Deleteing BLog",
        error,
      });
    }
  });

export { router as deleteRouter };