const express = require('express')
const router = express.Router()
const userall =   require('../controllers/user.controller');
// Retrieve all employees
router.get('/', userall.findAll);
// Create a new employee
router.post('/', userall.create);
// Retrieve a single employee with id
router.get('/:id', userall.findById);
// Update a employee with id
router.put('/:id', userall.update);
// Delete a employee with id
router.delete('/:id', userall.delete);
// Select Login User with username,password
router.post('/login',userall.login);
module.exports = router