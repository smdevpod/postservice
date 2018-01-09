var winston = require('winston');
var moment = require('moment');

var fs = require( 'fs' );
var logDir = '/home/centos/postservice/logs'; // directory path you want to set
var verLogDir = '/home/centos/postservice/logs/verbose'; // directory path you want to set
if ( !fs.existsSync( logDir ) ) {
    // Create the directory if it does not exist
    fs.mkdirSync( logDir );
}

// if ( !fs.existsSync( verLogDir ) ) {
//     // Create the directory if it does not exist
//     fs.mkdirSync( verLogDir );
// }

// error-date.log
var error = new(winston.Logger)({
    transports: [
        new(require('winston-daily-rotate-file'))({
            name: 'error',
            filename: logDir + '/-error.log',
            datePattern: 'dd-MM-yyyy',
            prepend: true,
            json: false,
            handleExceptions: true,
            timestamp: function() {
                return moment().format('D/MM/YYYY HH:mm:ss:SSS');
            },
            level: 'error'
        })
    ]
});

//system-date.log
var system = new(winston.Logger)({
    transports: [
    new(winston.transports.Console)({
            timestamp: function() {
                return moment().format('D/MM/YYYY HH:mm:ss:SSS');
            },
            colorize: true,
            handleExceptions: true
        }),
        new(require('winston-daily-rotate-file'))({
            name: 'system',
            filename: logDir + '/-system.log',
            datePattern: 'dd-MM-yyyy',
            prepend: true,
            json: false,
            handleExceptions: true,
            timestamp: function() {
                return moment().format('D/MM/YYYY HH:mm:ss:SSS');
            }
        }),
        error
    ]
});

//exports.verbose = verbose;
exports.system = system;
