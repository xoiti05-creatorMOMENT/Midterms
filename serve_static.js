var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('You have successfully created second app!');
});

app.get('/student', function (req, res) {
  res.send('Student Name: Ericson Galang<br>Course: BSIT<br>Subject: Web Server & Client Services');
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});