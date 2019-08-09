const mongoose = require('mongoose');
const { Schema } = mongoose;

// Model Employees Data
const EmployeeSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true},
    office: { type: String, required: true},
    salary: { type: Number, required: true}
})

// Save data as Schema
module.exports = mongoose.model('Employee', EmployeeSchema);