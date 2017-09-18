var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var sc = require('./controllers/serverController')

var app = express();
app.use(cors());

app.use(bodyParser.json());


var endPoint = "/api/cats"
app.post(endPoint, sc.create);
app.get(endPoint, sc.read);
// app.put(endPoint, sc.modify);
// app.delete(endPoint, sc.delete);


var port = 3001;
app.listen(port, () => {console.log("Server is g2g on port " + port + ".")})
