'use strict';
var dbConn = require('../../config/db.config');
//Image object create
var Image = function (file_image) {
    this.file_image = file_image.file_image;
};
Image.create = function (newImg, result) {
    dbConn.query("INSERT INTO file_image set ?", newImg, function (err, res) {
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
Image.findById = function (id, result) {
    dbConn.query("Select * from file_image where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Image.findAll = function (result) {
    dbConn.query("Select * from file_image", function (err, res) {
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
Image.update = function (id, image, result) {
    dbConn.query("UPDATE file_image SET file_image=? WHERE id = ?", [image.file_image, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Image.delete = function (id, result) {
    dbConn.query("DELETE FROM file_image WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Image;