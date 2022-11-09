'use strict';
var dbConn = require('../../config/db.config');
//product order object create
var ProductOrder = function (productorder) {
    this.order_no = productorder.order_no;
    this.order_item = productorder.order_item;
    this.volume = productorder.volume;
    this.point_token = productorder.point_token;
    this.type = productorder.type;
    this.order_date = productorder.order_date;
    this.username = productorder.username;
    this.balance = productorder.balance;
    this.admin_approve = productorder.admin_approve;
    this.point_token_broken = productorder.point_token_broken;
    this.approve_date = productorder.approve_date;
    // this.created_at = new Date();
    // this.updated_at = new Date();
};
ProductOrder.create = function (newEmp, result) {
    dbConn.query("INSERT INTO product_order set ?", newEmp, function (err, res) {
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
ProductOrder.findById = function (id, result) {
    dbConn.query("Select * from product_order where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
ProductOrder.findAll = function (result) {
    dbConn.query("Select * from product_order", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('product order : ', res);
            result(null, res);
        }
    });
};
ProductOrder.update = function (id, productorder, result) {
    dbConn.query("UPDATE product_order SET order_no=?,order_item=?,volume=?,point_token=?,type=?,order_date=?,username=?,balance=?,admin_approve=?,point_token_broken=?,approve_date=? WHERE id = ?", [productorder.order_no, productorder.order_item, productorder.volume,productorder.point_token,productorder.type,productorder.order_date,productorder.username,productorder.balance,productorder.admin_approve,productorder.point_token_broken,productorder.approve_date, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
ProductOrder.delete = function (id, result) {
    dbConn.query("DELETE FROM product_order WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = ProductOrder;