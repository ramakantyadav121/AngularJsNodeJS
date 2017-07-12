var mongoose = require('mongoose');
Schema = mongoose.Schema,
        UserSchema = new Schema({
            username: {type: String, required: true, index: {unique: true}},
            password: {type: String, required: true}
        });
var userModel = mongoose.model('User', UserSchema);
exports.loginAuthentication = function (req, res) {
    userModel.find(function (err, docs) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        console.log("user request" + docs); 
        res.json(docs); // return all todos in JSON format
    });
    
};

