require('dotenv').config();
const express = require('express');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(express.json());

// Mount AI feedback routes
app.use('/api/v1/feedback', feedbackRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🤖 Feedback AI service running on http://localhost:${PORT}`)
);