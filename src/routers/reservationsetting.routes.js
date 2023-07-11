const express = require('express')
const router = express.Router()
const reserSetingcontroller =   require('../controllers/reservationsetting.controller');
// Retrieve all employees
router.get('/', reserSetingcontroller.findAll);
// Create a new employee
router.post('/', reserSetingcontroller.create);
// Retrieve a single employee with id
router.get('/:id', reserSetingcontroller.findById);
// Update a employee with id
router.put('/:id', reserSetingcontroller.update);
// Delete a employee with id
router.delete('/:id', reserSetingcontroller.delete);
module.exports = router