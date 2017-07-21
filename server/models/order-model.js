/**
 @author rkYadav 
 */

var mongoose = require('mongoose');

var orderSchema = new Schema({
    name: {type: String, required: true},
    moNumber: {type: Number, required: true}
});

module.exports = mongoose.model('order', orderSchema);



