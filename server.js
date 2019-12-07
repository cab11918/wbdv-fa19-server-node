var express = require('express')
var app = express()

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
  res.send('hello world')
})

widgetService = require('./data/daos/university.dao.server')(app)

app.listen(3000)


