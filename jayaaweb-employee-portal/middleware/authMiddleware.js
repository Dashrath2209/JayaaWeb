const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    res.clearCookie('token');
    res.redirect('/login');
  }
};