'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var TransOrder = function (transorder) {
    this.order_no = transorder.order_no;
    this.order_item = transorder.order_item;
    this.volume = transorder.volume;
    this.point_token = transorder.point_token;
    this.username = transorder.username;
    this.admin_approve = transorder.admin_approve;
    this.approve_date = transorder.approve_date;
    this.address = transorder.address;
    // this.created_at = new Date();
    // this.updated_at = new Date();
};
TransOrder.create = function (newTransOrder, result) {
    dbConn.query("INSERT INTO trans_order set ?", newTransOrder, function (err, res) {
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
TransOrder.findById = function (id, result) {
    dbConn.query("Select * from trans_order where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
TransOrder.findAll = function (result) {
    dbConn.query("Select * from trans_order", function (err, res) {
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
TransOrder.update = function (id, transOrder, result) {
    dbConn.query("UPDATE trans_order SET order_no=?,order_item=?,volume=?,point_token=?,username=?,admin_approve=?,approve_date=?,address=? WHERE id = ?",
        [
            transOrder.order_no,
            transOrder.order_item,
            transOrder.volume,
            transOrder.point_token,
            transOrder.username,
            transOrder.admin_approve,
            transOrder.approve_date,
            transOrder.address, id
        ], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
TransOrder.delete = function (id, result) {
    dbConn.query("DELETE FROM trans_order WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = TransOrder;