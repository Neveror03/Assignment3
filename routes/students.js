const {studentMode} = require('../database/database')

var express = require('express');
var router = express.Router();

router.post('/students', async function(req, res, next) {
  const { name, studentCode, isActive } = req.body;
  const result = await studentMode.create({name, studentCode, isActive});

  res.json({
    'success': true,
    'message': 'Student created succesfully!',
    'data': result
  
});
});

router.post('/', async function(req, res, next) {
  const students = await studentMode.find({});

  res.json({
    'success': true,
    'data': students
  
});
});

module.exports = router;
