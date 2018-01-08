var winston = require('winston');
var moment = require('moment');

var fs = require( 'fs' );
var logDir = '/home/centos/postService/logs'; // directory path you want to set
var verLogDir = '/home/centos/postService/logs/verbose'; // directory path you want to set
if ( !fs.existsSync( logDir ) ) {
    // Create the directory if it does not exist
    fs.mkdirSync( logDir );
}

// if ( !fs.existsSync( verLogDir ) ) {
//     // Create the directory if it does not exist
//     fs.mkdirSync( verLogDir );
// }

// verbose method
// var verboseLogFile = new(require('winston-daily-rotate-file'))({
//     name: 'verboseLogFile',
//     filename: verLogDir + '/-verbose.log',
//     datePattern: 'dd-MM-yyyy',
//     prepend: true,
//     json: false,
//     timestamp: function() {
//         return moment().format('D/MM/YYYY HH:mm:ss:SSS');
//     }
// })

// verbose log
// var verbose = new(winston.Logger)({
//     transports: [
//     new(winston.transports.Console)({
//             timestamp: function() {
//                 return moment().format('D/MM/YYYY HH:mm:ss:SSS');
//             },
//             colorize: true
//         }),
//         new(require('winston-daily-rotate-file'))({
//             name: 'verbose',
//             filename: logDir + '/-verbose.log',
//             datePattern: 'dd-MM-yyyy',
//             prepend: true,
//             json: false,
//             timestamp: function() {
//                 return moment().format('D/MM/YYYY HH:mm:ss:SSS');
//             }
//         })
//     ]
// });

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

// equinoxe-medusa-date.log
var equinoxe_medusa = new(winston.Logger)({
    transports: [
    new(winston.transports.Console)({
            timestamp: function() {
                return moment().format('D/MM/YYYY HH:mm:ss:SSS');
            },
            colorize: true,
            handleExceptions: true
        }),
        new(require('winston-daily-rotate-file'))({
            name: 'equinoxe-medusa',
            filename: logDir + '/-equinoxe-medusa.log',
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

//medusa-equinoxe-date.log
var medusa_equinoxe = new(winston.Logger)({
    transports: [
    new(winston.transports.Console)({
            timestamp: function() {
                return moment().format('D/MM/YYYY HH:mm:ss:SSS');
            },
            colorize: true,
            handleExceptions: true
        }),
        new(require('winston-daily-rotate-file'))({
            name: 'medusa-equinoxe',
            filename: logDir + '/-medusa-equinoxe.log',
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

//hydra-medusa-date.log
var hydra_medusa = new(winston.Logger)({
    transports: [
    new(winston.transports.Console)({
            timestamp: function() {
                return moment().format('D/MM/YYYY HH:mm:ss:SSS');
            },
            colorize: true,
            handleExceptions: true
        }),
        new(require('winston-daily-rotate-file'))({
            name: 'hydra-medusa',
            filename: logDir + '/-hydra-medusa.log',
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

//hydra_medusa_out_of_scope-date.log
var hydra_medusa_out_of_scope = new(winston.Logger)({
    transports: [
    new(winston.transports.Console)({
            timestamp: function() {
                return moment().format('D/MM/YYYY HH:mm:ss:SSS');
            },
            colorize: true,
            handleExceptions: true
        }),
        new(require('winston-daily-rotate-file'))({
            name: 'hydra_medusa_out_of_scope',
            filename: logDir + '/-hydra_medusa_out_of_scope.log',
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
exports.medusa_equinoxe = medusa_equinoxe;
exports.equinoxe_medusa = equinoxe_medusa;
exports.hydra_medusa = hydra_medusa;
exports.system = system;



