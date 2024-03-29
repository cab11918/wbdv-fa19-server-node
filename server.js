var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin",
      "http://localhost:4200");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get('/', function (req, res) {
  res.send('hello student')
})



widgetService = require('./services/university.service.server')(app)

app.listen(3000)


