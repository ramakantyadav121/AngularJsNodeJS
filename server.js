// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
var port = process.env.PORT || 8080; 				// set the port		
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// mongodb configuration ===============================================================
var connURL = 'mongodb://ramakant:ramakant@ds155582.mlab.com:55582/mydb';
//var connURL = 'mongodb://localhost:27017/mydb';

mongoose.connect(connURL, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

//on node exit mongodb closes connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});

// End mongodb configuration ===============================================================

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./server/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
