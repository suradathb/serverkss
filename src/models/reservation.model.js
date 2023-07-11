'use strict';
var dbConn = require('./../../config/db.config');
//Reservation object create
var Reservation = function (reservation) {
    this.id = reservation.no;
    this.name = reservation.name;
    this.email = reservation.email;
    this.date = reservation.date;
    this.time = reservation.time;
    this.table = reservation.table;
    this.seats = reservation.seats;
    this.locations = reservation.locations;
    this.phone = reservation.phone;
    // this.created_at = new Date();
    // this.updated_at = new Date();
};
Reservation.create = function (newPmp, result) {
    dbConn.query("INSERT INTO reservation set ?", newPmp, function (err, res) {
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
Reservation.findById = function (id, result) {
    dbConn.query("Select * from reservation where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Reservation.findAll = function (result) {
    dbConn.query("Select * from reservation", function (err, res) {
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
Reservation.update = function (id, reservation, result) {
    dbConn.query("UPDATE reservation SET name=?,eamil=?,date=?,time=?,table=?,seats=?,locations=?,phone=? WHERE id = ?", [reservation.no, reservation.name, reservation.email, reservation.date, reservation.time, reservation.table, reservation.seats, reservation.locations,, reservation.phone, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Reservation.delete = function (id, result) {
    dbConn.query("DELETE FROM reservation WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Reservation;