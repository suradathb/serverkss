'use strict';
const User = require('../models/user.model');
exports.findAll = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    User.findAll(function (err, user) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
};
exports.create = function (req, res) {
    const new_user = new User(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.create(new_user, function (err, user) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "User added successfully!", data: user });
        });
    }
};
exports.findById = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.update(req.params.id, new User(req.body), function (err, user) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'User successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    User.delete(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'User successfully deleted' });
    });
};

exports.login = function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    User.login(username,password,function(err,user){
        if(err)
            res.send(err);
        res.json(user);
    })
}