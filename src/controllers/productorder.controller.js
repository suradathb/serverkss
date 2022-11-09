'use strict';
const ProductOrder = require('../models/productorder.model');
exports.findAll = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    ProductOrder.findAll(function (err, productorder) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', productorder);
        res.send(productorder);
    });
};
exports.create = function (req, res) {
    const new_productorder = new ProductOrder(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        ProductOrder.create(new_productorder, function (err, productorder) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Procust order added successfully!", data: productorder });
        });
    }
};
exports.findById = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    ProductOrder.findById(req.params.id, function (err, productorder) {
        if (err)
            res.send(err);
        res.json(productorder);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        ProductOrder.update(req.params.id, new ProductOrder(req.body), function (err, productorder) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Product order successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    ProductOrder.delete(req.params.id, function (err, productorder) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Product order successfully deleted' });
    });
};