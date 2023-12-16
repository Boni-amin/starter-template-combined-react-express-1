const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    email:"string" ,
    firstName:"string" ,
    lastName:"string" ,
    mobile:"string" 
} , {versionKey: false, timestamps: true});

module.exports = mongoose.model('tasks', tasksSchema);