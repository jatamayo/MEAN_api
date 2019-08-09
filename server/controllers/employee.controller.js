const Employee = require('../models/employee');
const employeeCtrl = {};

// GET ALL EMPLOYEES
employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

// GET ONE EMPLOYEE
employeeCtrl.getEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee); 
};

// CREATE EMPLOYEE
employeeCtrl.createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({'status': "Employee Saved"});
};

// EDIT EMPLOYEE
employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.params.office, 
        salary: req.params.salary
    }
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated'}); 
};

// DELETE EMPLOYEE
employeeCtrl.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndRemove(id);
    res.json({status: 'Employee Deleted'})        
};

module.exports = employeeCtrl;