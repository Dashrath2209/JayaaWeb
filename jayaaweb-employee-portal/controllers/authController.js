const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.render('register', { error: 'Email already in use' });

  user = await User.create({ name, email, password });
  const token = generateToken(user._id);
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/dashboard');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.render('login', { error: 'Invalid credentials' });
  }

  const token = generateToken(user._id);
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/dashboard');
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
};