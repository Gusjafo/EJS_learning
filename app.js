const express = require('express');
const bodyparser = require('body-parser');

const app = express();
let tasks = ["asleep", "take a breakfast", "study web development"];

app.use(express.static('public'));
app.use(bodyparser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("es-LA", options);

  res.render('lists', {
    kindOfDay: day,
    newListTask: tasks

  });

});

app.post('/', function(req, res) {
  task = req.body.newTask;
  tasks.push(task);

  res.redirect("/");
})

app.listen(3000, function() {

  console.log("Server is running on port 3000");
});
