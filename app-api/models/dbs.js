var mongoose = require('mongoose');
var gracefulShutdown;
require('./applicantsdb');
var dbURI = 'mongodb://localhost:27017/Jobapplication';
mongoose.connect(dbURI);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', function () {
    console.log('Mongoose Connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose Connection error ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg,callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose Disconnected through' + msg);
        callback();
    });
};

process.once('SIGUSR2',function () {
    gracefulShutdown('nodemon restart',function () {
        process.kill(process.pid,'SIGUSR2');

    });
});

process.on('SIGINT',function () {
    gracefulShutdown('app termination',function () {
        process.exit(0);
    });
});