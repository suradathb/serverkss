'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Product = function (product) {
    this.item_no = product.item_no;
    this.item_name = product.item_name;
    this.description = product.description;
    this.price = product.price;
    this.rateing = product.rateing;
    // this.created_at = new Date();
    // this.updated_at = new Date();
};
Product.create = function (newPmp, result) {
    dbConn.query("INSERT INTO products set ?", newPmp, function (err, res) {
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
Product.findById = function (id, result) {
    dbConn.query("Select * from products where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Product.findAll = function (result) {
    dbConn.query("Select * from products", function (err, res) {
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
Product.update = function (id, product, result) {
    dbConn.query("UPDATE products SET item_no=?,item_name=?,description=?,price=?,rateing=? WHERE id = ?", [product.item_no, product.item_name, product.description, product.price, product.rateing, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Product.delete = function (id, result) {
    dbConn.query("DELETE FROM products WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Product;