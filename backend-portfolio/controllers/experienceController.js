// controllers/experienceController.js
import asyncHandler from "express-async-handler";
import Experience from "../models/Experience.js";

// @desc    Get all experiences
// @route   GET /api/experiences
// @access  Public
const getExperiences = asyncHandler(async (req, res) => {
  const experiences = await Experience.find({});
  res.json(experiences);
});

// @desc    Create an experience
// @route   POST /api/experiences
// @access  Private/Admin
const createExperience = asyncHandler(async (req, res) => {
  const { company, position, startDate, endDate, description } = req.body;

  const experience = new Experience({
    company,
    position,
    startDate,
    endDate,
    description,
  });

  const createdExperience = await experience.save();
  res.status(201).json(createdExperience);
});

// @desc    Update an experience
// @route   PUT /api/experiences/:id
// @access  Private/Admin
const updateExperience = asyncHandler(async (req, res) => {
  const { company, position, startDate, endDate, description } = req.body;

  const experience = await Experience.findById(req.params.id);

  if (experience) {
    experience.company = company || experience.company;
    experience.position = position || experience.position;
    experience.startDate = startDate || experience.startDate;
    experience.endDate = endDate || experience.endDate;
    experience.description = description || experience.description;

    const updatedExperience = await experience.save();
    res.json(updatedExperience);
  } else {
    res.status(404);
    throw new Error("Experience not found");
  }
});

// @desc    Delete an experience
// @route   DELETE /api/experiences/:id
// @access  Private/Admin
const deleteExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.findById(req.params.id);

  if (experience) {
    await experience.remove();
    res.json({ message: "Experience removed" });
  } else {
    res.status(404);
    throw new Error("Experience not found");
  }
});

export { getExperiences, createExperience, updateExperience, deleteExperience };
