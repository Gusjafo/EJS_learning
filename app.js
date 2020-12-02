const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.get('/', function(req, res){

  var today = new Date();
  var currentDay = today.getDay();
  console.log(currentDay);
  res.send('Hello World');

});

app.listen(3000);
