'use strict';
var dbConn = require('../../config/db.config');
//Reservation object create
var ReserSeting = function (reserSeting) {
    this.id = reserSeting.id;
    this.number = reserSeting.number;
    this.seats = reserSeting.seats;
    this.zone = reserSeting.zone;
    this.created_at = new Date();
    this.updated_at = new Date();
};
ReserSeting.create = function (newPmp, result) {
    dbConn.query("INSERT INTO reserSeting set ?", newPmp, function (err, res) {
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
ReserSeting.findById = function (id, result) {
    dbConn.query("Select * from reserSeting where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
ReserSeting.findAll = function (result) {
    dbConn.query("Select * from reserSeting", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('product : ', res);
            result(null, res);
        }
    });
};
ReserSeting.update = function (id, reserSeting, result) {
    dbConn.query("UPDATE reserSeting SET number=?,seats=?,zone=? WHERE id = ?", [reserSeting.number, reserSeting.seats, reserSeting.zone, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
ReserSeting.delete = function (id, result) {
    dbConn.query("DELETE FROM reserSeting WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = ReserSeting;