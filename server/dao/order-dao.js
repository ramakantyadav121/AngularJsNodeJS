/**
 @author rkYadav 
 */

var order = require('../models/order-model');

exports.getOrders = function(req, res){
    order.find(function (err, docs) {
       if (err) {
            res.send(err);
        }
        res.json(docs);  
    });
};