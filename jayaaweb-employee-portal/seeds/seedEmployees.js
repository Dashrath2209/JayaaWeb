require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Employee = require('../models/Employee');

const sample = [
  { name: 'Alice Johnson', position: 'Developer', department: 'Engineering', salary: 60000, performanceScore: 85 },
  { name: 'Bob Smith', position: 'Designer', department: 'UI/UX', salary: 55000, performanceScore: 78 },
  { name: 'Carol Lee', position: 'Manager', department: 'Sales', salary: 70000, performanceScore: 92 }
];

const seed = async () => {
  await connectDB();
  await Employee.deleteMany();
  await Employee.insertMany(sample);
  console.log('✅ Sample employees added');
  process.exit();
};

seed();