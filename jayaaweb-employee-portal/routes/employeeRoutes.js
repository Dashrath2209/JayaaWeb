const express = require('express');
const {
  getAll,
  showAddForm,
  addEmployee,
  showEditForm,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(protect);

router.get('/', getAll);
router.get('/add', showAddForm);
router.post('/add', addEmployee);
router.get('/edit/:id', showEditForm);
router.post('/edit/:id', updateEmployee);
router.get('/delete/:id', deleteEmployee);

module.exports = router;