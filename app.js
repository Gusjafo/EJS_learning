const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyparser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  };


  var day = today.toLocaleDateString("es-LA", options);

  res.render('lists', {
    kindOfDay: day
  });
});

app.post('/', function(req, res){
  var task = req.body.newTask;
  console.log(task);
})

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
