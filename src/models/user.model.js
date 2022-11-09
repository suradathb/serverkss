'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var User = function (user) {
    this.username = user.username;
    this.password = user.password;
    this.address = user.address;
    this.hash_keys = user.hash_keys;
    this.types = user.types;
    this.chang_password = user.chang_password;
    this.created_at = new Date();
    this.updated_at = new Date();
};
User.create = function (newUser, result) {
    dbConn.query("INSERT INTO user set ?", newUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.findById = function (id, result) {
    dbConn.query("Select * from user where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.findAll = function (result) {
    dbConn.query("Select * from user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('user : ', res);
            result(null, res);
        }
    });
};
User.update = function (id, user, result) {
    dbConn.query("UPDATE user SET username=?,password=?,address=?,hash_keys=?,types=?,chang_password=? WHERE id = ?", [user.username, user.password, user.address, user.hash_keys, user.types,user.chang_password, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
User.delete = function (id, result) {
    dbConn.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = User;