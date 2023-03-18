const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({

    empId: { type: String },
    empName: { type: String },
    salary: { type: String },
    gender: { type: String },
    DOB: { type: String },
    email: { type: String },
    type: { type: String },
    nic: { type: String, unique: true },
    date: { type: String },
    status: { type: String },
    mobileNo: { type: Number },

});

const salary = mongoose.model('salary', empSchema)
module.exports = salary;