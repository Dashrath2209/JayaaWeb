// backend/models/Problem.js
const mongoose = require('mongoose');
const ProblemSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: { type: String, enum: ['Easy','Medium','Hard'] },
  sampleInput: String,
  sampleOutput: String
});
module.exports = mongoose.model('Problem', ProblemSchema);