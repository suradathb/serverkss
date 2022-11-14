const express = require('express')
const router = express.Router()
const imagefile =   require('../controllers/imagefile.controller');
// Retrieve all employees
router.get('/', imagefile.findAll);
// Create a new employee
router.post('/', imagefile.create);
// Retrieve a single employee with id
router.get('/:id', imagefile.findById);
// Update a employee with id
router.put('/:id', imagefile.update);
// Delete a employee with id
router.delete('/:id', imagefile.delete);
module.exports = router