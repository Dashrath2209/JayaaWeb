const express = require('express');
const { generateSummaries } = require('../controllers/feedbackController');
const router = express.Router();

// GET /api/v1/feedback/summaries
router.get('/summaries', generateSummaries);

module.exports = router;