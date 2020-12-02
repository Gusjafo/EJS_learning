const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

  var today = new Date();
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var currentDay = day[today.getDay()];

  res.render('lists', {
    kindOfDay: currentDay
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
