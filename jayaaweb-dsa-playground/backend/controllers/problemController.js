// backend/controllers/problemController.js
const Problem = require('../models/Problem');

exports.getAll = async (req, res) => {
  const problems = await Problem.find();
  res.json(problems);
};

exports.getById = async (req, res) => {
  const prob = await Problem.findById(req.params.id);
  res.json(prob);
};