const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name:             { type: String, required: true },
  position:         { type: String, required: true },
  department:       { type: String, required: true },
  salary:           { type: Number, default: 0 },
  performanceScore: { type: Number, default: 0 },
  joinedOn:         { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);