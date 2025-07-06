// backend/models/Submission.js
const mongoose = require('mongoose');
const SubmissionSchema = new mongoose.Schema({
  userId:   mongoose.Types.ObjectId,
  problem:  { type: mongoose.Types.ObjectId, ref: 'Problem' },
  code:     String,
  status:   { type: String, enum: ['Pending','Accepted','Wrong Answer'], default: 'Pending' },
  submittedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Submission', SubmissionSchema);