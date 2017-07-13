var mongoose = require('mongoose');
User = require('../models/user-model.js');
//var connStr = 'mongodb://ramakant:ramakant@ds155582.mlab.com:55582/mydb';
var connStr = 'mongodb://localhost:27017/mydb';
var db = mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

// create a user a new user
//var testUser = new User({
//    username: 'admin',
//    password: 'admin'
//});

// save user to database
//testUser.save(function(err) {
//    if (err) throw err;
//});

// fetch user and test password verification
exports.loginAuthentication = function (req, res) {
    var userName = req.body.username;
    var password = req.body.password;
    User.findOne({username:userName}, function (err, user) {
        if (err)
            throw err;
        if (user) {
            // test a matching password
            user.comparePassword(password, function (err, isMatch) {
                if (err)
                    throw err;
                console.log('authentication', isMatch);
                res.send(isMatch);
            });
        }
    });
//    db.connection.close();
};

