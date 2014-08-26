var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './public')));

var server = http.createServer(app);
app.listen(3000);
console.log('Listening on port 3000');
