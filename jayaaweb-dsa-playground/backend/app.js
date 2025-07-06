require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const problemRoutes = require('./routes/problemRoutes');
const submissionRoutes = require('./routes/submissionRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/problems', problemRoutes);
app.use('/api/submissions', submissionRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🧮 DSA Playground API running on :${PORT}`));