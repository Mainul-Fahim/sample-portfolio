// routes/experienceRoutes.js
import express from "express";
import {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/experienceController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route
router.get("/", getExperiences);

// Protected routes for admin
router.post("/", protect, admin, createExperience);
router.put("/:id", protect, admin, updateExperience);
router.delete("/:id", protect, admin, deleteExperience);

export default router;
