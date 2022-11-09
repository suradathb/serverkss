'use strict';
const TransOrder = require('../models/transorder.model');
exports.findAll = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    TransOrder.findAll(function (err, transorder) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', transorder);
        res.send(transorder);
    });
};
exports.create = function (req, res) {
    const new_transorder = new TransOrder(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        TransOrder.create(new_transorder, function (err, transorder) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Trans order added successfully!", data: transorder });
        });
    }
};
exports.findById = function (req, res) {
    TransOrder.findById(req.params.id, function (err, transorder) {
        if (err)
            res.send(err);
        res.json(transorder);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        TransOrder.update(req.params.id, new TransOrder(req.body), function (err, transorder) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Trans order successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    TransOrder.delete(req.params.id, function (err, transorder) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Trans order successfully deleted' });
    });
};