// controllers/skillController.js
import asyncHandler from "express-async-handler";
import Skill from "../models/Skill.js";

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find({});
  res.json(skills);
});

// @desc    Create a skill
// @route   POST /api/skills
// @access  Private/Admin
const createSkill = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const skill = new Skill({
    name,
  });

  const createdSkill = await skill.save();
  res.status(201).json(createdSkill);
});

// @desc    Update a skill
// @route   PUT /api/skills/:id
// @access  Private/Admin
const updateSkill = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const skill = await Skill.findById(req.params.id);

  if (skill) {
    skill.name = name || skill.name;

    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } else {
    res.status(404);
    throw new Error("Skill not found");
  }
});

// @desc    Delete a skill
// @route   DELETE /api/skills/:id
// @access  Private/Admin
const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findById(req.params.id);

  if (skill) {
    await skill.remove();
    res.json({ message: "Skill removed" });
  } else {
    res.status(404);
    throw new Error("Skill not found");
  }
});

export { getSkills, createSkill, updateSkill, deleteSkill };
