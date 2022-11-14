'use strict';
const Image = require('../models/imagefile.model');
exports.findAll = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    Image.findAll(function (err, imagefile) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', imagefile);
        res.send(imagefile);
    });
};
exports.create = function (req, res) {
    const new_image = new Image(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.create(new_image, function (err, imagefile) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Image File added successfully!", data: imagefile });
        });
    }
};
exports.findById = function (req, res) {
    Image.findById(req.params.id, function (err, imagefile) {
        if (err)
            res.send(err);
        res.json(imagefile);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Image.update(req.params.id, new Image(req.body), function (err, imagefile) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Image file successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    Image.delete(req.params.id, function (err, imagefile) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Image file successfully deleted' });
    });
};