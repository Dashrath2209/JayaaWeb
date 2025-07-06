require('dotenv').config();
const express  = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const empRoutes  = require('./routes/employeeRoutes');

const app = express();
connectDB();

app
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))
  .use(cookieParser())
  .set('view engine', 'ejs');

// Public landing
app.get('/', (req, res) => res.render('index'));

// Mount routes
app.use(authRoutes);
app.use('/dashboard', empRoutes);
app.use('/employees', empRoutes);

// 404 handler
app.use((req, res) => res.status(404).send('Page not found'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));