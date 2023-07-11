'use strict';
const ReserSeting = require('../models/reservationsetting.model');
exports.findAll = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    ReserSeting.findAll(function (err, reserSetting) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', reserSetting);
        res.send(reserSetting);
    });
};
exports.create = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    const new_reserSetting = new ReserSeting(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        ReserSeting.create(new_reserSetting, function (err, reserSetting) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Product added successfully!", data: reserSetting });
        });
    }
};
exports.findById = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    ReserSeting.findById(req.params.id, function (err, reserSetting) {
        if (err)
            res.send(err);
        res.json(reserSetting);
    });
};
exports.update = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        ReserSeting.update(req.params.id, new ReserSeting(req.body), function (err, reserSetting) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Reservation successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    ReserSeting.delete(req.params.id, function (err, reserSetting) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Reservation successfully deleted' });
    });
};