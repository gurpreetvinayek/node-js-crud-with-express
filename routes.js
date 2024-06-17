const express = require('express');
const router = express.Router();
const employeeController =   require('./src/controllers/employeeController');
// Define routes
router.get('/users', (req, res) => {
  res.send('List of users');
});
router.get('/employees', employeeController.getAllUsers);
router.get('/employee/:id',employeeController.getUserById);
router.post('/employee/',employeeController.createUser);
module.exports = router;
