// backend/routes/problemRoutes.js
const router = require('express').Router();
const { getAll, getById } = require('../controllers/problemController');
router.get('/', getAll);
router.get('/:id', getById);
module.exports = router;