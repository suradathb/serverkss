const express = require('express')
const router = express.Router()
const productordercontroller =   require('../controllers/productorder.controller');
// Retrieve all product order
router.get('/', productordercontroller.findAll);
// Create a new product order
router.post('/', productordercontroller.create);
// Retrieve a single product order with id
router.get('/:id', productordercontroller.findById);
// Update a product order with id
router.put('/:id', productordercontroller.update);
// Delete a product order with id
router.delete('/:id', productordercontroller.delete);
module.exports = router