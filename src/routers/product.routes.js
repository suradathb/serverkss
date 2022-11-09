const express = require('express')
const router = express.Router()
const productcontroller =   require('../controllers/product.controller');
// Retrieve all employees
router.get('/', productcontroller.findAll);
// Create a new employee
router.post('/', productcontroller.create);
// Retrieve a single employee with id
router.get('/:id', productcontroller.findById);
// Update a employee with id
router.put('/:id', productcontroller.update);
// Delete a employee with id
router.delete('/:id', productcontroller.delete);
module.exports = router