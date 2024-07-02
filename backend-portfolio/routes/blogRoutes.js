// routes/blogRoutes.js
import express from "express";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route
router.get("/", getBlogs);

// Protected routes for admin
router.post("/", protect, admin, createBlog);
router.put("/:id", protect, admin, updateBlog);
router.delete("/:id", protect, admin, deleteBlog);

export default router;
