/**
 * @author Faizal Vasaya
 * @fileOverview All the server initialization goes in this file. It requires other support files
 *               to complete its implementation.
 */
//Add express support to the server. It provides routing functionalities to the server.
var express = require('express');
//Add morgan support to the server. Morgan enables route request logging in the console.
var morgan = require('morgan');
//Body-parser enables the express application to parse JSON objects sent via http request and response.
var bodyParser = require('body-parser');
//Add mongoose support in the express application. It provides basic functionalities to connect and transact with mongodb.
var mongoose = require('mongoose');
//Path enables system file path traversal.
var path = require('path');
//Initialize app as express application.
var app = express();
//Constant port number to serve the express application.
var port = process.env.PORT || 3000;
//Get an instance of the router provided by the express.
var router = express.Router();

//Get routes from the app/routes/ folder
var signupRoute = require('./app/routes/signup.api')(router);
var authRoute = require('./app/routes/auth.api')(router);

//Register app to use morgan Middleware in development environment. Enables 'dev' level logging
app.use(morgan('dev'));
//Register app to use bodyParser json Middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Use express's static serving capabilities to serve the static file like .html, .css, .js from /public folder
app.use(express.static(__dirname + '/public'));
//Register routes for at applcation level.
app.use('/api', signupRoute);
app.use('/api', authRoute);

//Connect to a mongo instance hosted at localhost:27017 with a database 'letsmeet'
mongoose.connect('mongodb://localhost:27017/letsmeet', function (err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('Successfully connected');
    }
});

//A get request at root should serve index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

//Start the express application at the specified port
app.listen(port, function () {
    console.log('Server running at port ' + port);
});