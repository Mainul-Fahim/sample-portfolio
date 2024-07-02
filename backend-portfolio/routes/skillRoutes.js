// routes/skillRoutes.js
import express from "express";
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route
router.get("/", getSkills);

// Protected routes for admin
router.post("/", protect, admin, createSkill);
router.put("/:id", protect, admin, updateSkill);
router.delete("/:id", protect, admin, deleteSkill);

export default router;
