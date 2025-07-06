const Employee = require('../models/Employee');

exports.getAll = async (req, res) => {
  const employees = await Employee.find().sort({ joinedOn: -1 });
  res.render('employeeList', { employees });
};

exports.showAddForm = (req, res) => {
  res.render('dashboard');
};

exports.addEmployee = async (req, res) => {
  await Employee.create(req.body);
  res.redirect('/employees');
};

exports.showEditForm = async (req, res) => {
  const emp = await Employee.findById(req.params.id);
  res.render('dashboard', { emp });
};

exports.updateEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/employees');
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect('/employees');
};