const express = require('express')
const router = express.Router()
const transOrder =   require('../controllers/transorder.controller');
// Retrieve all employees
router.get('/', transOrder.findAll);
// Create a new employee
router.post('/', transOrder.create);
// Retrieve a single employee with id
router.get('/:id', transOrder.findById);
// Update a employee with id
router.put('/:id', transOrder.update);
// Delete a employee with id
router.delete('/:id', transOrder.delete);
module.exports = router