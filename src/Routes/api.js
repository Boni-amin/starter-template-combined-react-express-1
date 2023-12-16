const express = require('express');
const router = express.Router();

const tasksControllers = require('../controller/tasksControllers');





//to create Data 
router.post('/create-task', tasksControllers.createTask);



module.exports= router;