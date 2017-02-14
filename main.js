
var http = require("http");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use( express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.sendfile('./public/index.html');
});

app.post('/input', function(req, res){
  var tba = req.body.tba;
  console.log(tba);
  res.redirect('/');
})

app.listen(3000, function(){
  console.log("server running on port 3000");
});
