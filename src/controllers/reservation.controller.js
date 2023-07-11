'use strict';
const Reservation = require('../models/reservation.model');
exports.findAll = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    Reservation.findAll(function (err, reservation) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', reservation);
        res.send(reservation);
    });
};
exports.create = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    const new_reservation = new Reservation(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Reservation.create(new_reservation, function (err, reservation) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Product added successfully!", data: reservation });
        });
    }
};
exports.findById = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    Reservation.findById(req.params.id, function (err, reservation) {
        if (err)
            res.send(err);
        res.json(reservation);
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
        Reservation.update(req.params.id, new Reservation(req.body), function (err, reservation) {
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
    Reservation.delete(req.params.id, function (err, reservation) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Reservation successfully deleted' });
    });
};