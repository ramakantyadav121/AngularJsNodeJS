var User = require('../models/user-model.js');
var jsonWebToken = require('jsonwebtoken');
var config = require('../utils/config');
var secretkey = config.secretKey;

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
                if (isMatch) {
                    // if user is found and password is right
                    // create a token
                    var accessToken = jsonWebToken.sign(user, secretkey, {
                        expiresIn : 60*60*1 // expires in 24 hours
                    });
                    // return the information including token as JSON
                    res.json({
                        authsuccess: true,
                        message: 'Authentication successfull',
                        authToken: accessToken
                    });
                }else{
                    res.json({ authsuccess: false, message: 'Authentication failed. Wrong password.' });
                }
            });
        }
        else{
            res.json({ authsuccess: false, message: 'Authentication failed. User not found.' });
        }
    });
//    db.connection.close();
};

