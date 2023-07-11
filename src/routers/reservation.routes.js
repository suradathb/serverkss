const express = require('express')
const router = express.Router()
const reservationcontroller =   require('../controllers/reservation.controller');
// Retrieve all employees
router.get('/', reservationcontroller.findAll);
// Create a new employee
router.post('/', reservationcontroller.create);
// Retrieve a single employee with id
router.get('/:id', reservationcontroller.findById);
// Update a employee with id
router.put('/:id', reservationcontroller.update);
// Delete a employee with id
router.delete('/:id', reservationcontroller.delete);
module.exports = router