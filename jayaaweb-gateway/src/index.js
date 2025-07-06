const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

// Proxy rules
app.use('/api/employees', createProxyMiddleware({
  target: process.env.EMPLOYEE_SERVICE_URL, changeOrigin: true
}));
app.use('/api/appraisals', createProxyMiddleware({
  target: process.env.SALARY_SERVICE_URL, changeOrigin: true
}));
app.use('/api/feedback', createProxyMiddleware({
  target: process.env.FEEDBACK_SERVICE_URL, changeOrigin: true
}));
app.use('/api/dsa', createProxyMiddleware({
  target: process.env.DSA_SERVICE_URL, changeOrigin: true
}));
app.use('/api/network', createProxyMiddleware({
  target: process.env.NETWORK_SERVICE_URL, changeOrigin: true
}));
app.use('/api/git', createProxyMiddleware({
  target: process.env.GITOPS_SERVICE_URL, changeOrigin: true
}));

// Serve unified React shell
app.use('/', express.static('public'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🌐 Gateway listening on http://localhost:${PORT}`);
});