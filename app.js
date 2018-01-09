var express = require('express');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var log = require('./logger/log.js');

// mongoose.Promise = global.Promise;
// mongoose.connect(mongoConfig.database);
// var db = mongoose.connection;

var index = require('./routes/index');
var POSTreciever = require('./routes/testPOSTreciever');

// Init App
var app = express();

app.use(cookieParser());

// BodyParser Middleware
app.use(bodyParser.json());

app.use('/', index);
app.use('/', POSTreciever);

// Set Port
app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
	log.system.info('Server has successfully started on port ' + app.get('port'));
});