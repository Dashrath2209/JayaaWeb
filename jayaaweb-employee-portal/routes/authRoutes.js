const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const router = express.Router();

router
  .route('/register')
  .get((req, res) => res.render('register'))
  .post(register);

router
  .route('/login')
  .get((req, res) => res.render('login'))
  .post(login);

router.get('/logout', logout);

module.exports = router;