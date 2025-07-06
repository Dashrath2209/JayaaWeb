// backend/routes/submissionRoutes.js
const router = require('express').Router();
const { submit, getLeaderboard } = require('../controllers/submissionController');
router.post('/submit', submit);
router.get('/leaderboard', getLeaderboard);
module.exports = router;