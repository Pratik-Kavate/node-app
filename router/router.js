const express = require('express');
const employeeController = require('../controllers/employeeController');
const router = express.Router();


router.get('/getEmployeeDetailsById', employeeController.getEmployeeDetailsById);
router.get('/getEmpDetailsByDepartment', employeeController.getEmpDetailsByDepartment);
router.get('/getEmployeeDetailsBySalary', employeeController.getEmployeeDetailsBySalary);

module.exports = router;