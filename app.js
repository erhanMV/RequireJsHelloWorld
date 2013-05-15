var express = require('express');
var path = require('path');
var http = require('http');
var util = require('util');


var app = express();

var port = 3001;

app.configure(function() {
    app.use(express.cookieParser());
    app.use(express.session({
	secret : 'Fv0rV8Ux8j'
    }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

http.createServer(app).listen(port);
