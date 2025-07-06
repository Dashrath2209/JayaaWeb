// backend/controllers/submissionController.js
const Submission = require('../models/Submission');

exports.submit = async (req, res) => {
  // In a real system you'd run code in sandbox here
  const { userId, problemId, code } = req.body;
  // Simple mock: accept if code contains "return"
  const status = code.includes('return') ? 'Accepted' : 'Wrong Answer';
  const sub = await Submission.create({ userId, problem: problemId, code, status });
  res.json(sub);
};

exports.getLeaderboard = async (req, res) => {
  // Count accepted submissions per user
  const agg = await Submission.aggregate([
    { $match: { status: 'Accepted' } },
    { $group: { _id: '$userId', wins: { $sum: 1 } } },
    { $sort: { wins: -1 } },
    { $limit: 10 }
  ]);
  res.json(agg);
};