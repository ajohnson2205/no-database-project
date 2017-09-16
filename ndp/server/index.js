var express = require('express');
var bodyParser = require('body-parser');
var server = require('./controllers/serverController')

var app = express();

app.use(bodyParser.json());





var port = 3001;
app.listen(port, () => {console.log("Server is g2g on port " + port + ".")})
