const express = require('express');
const bodyparser = require('body-parser');

const app = express();
let tasksArray = ["asleep", "take a breakfast", "study web development"];
let workItems = [];

app.use(express.static('public'));
app.use(bodyparser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("es-LA", options);
  res.render('index', {
    listTitle: day,
    newListTask: tasksArray
  });
});

app.post('/', function(req, res) {
  let task = req.body.newTask;

  if(req.body.list === "Trabajo") {
    workItems.push(task);
    res.redirect("/work");
  }else {
    tasksArray.push(task);
    res.redirect("/");
  }
});

app.get('/work', function(req, res) {
  res.render("index", {
    listTitle: "Trabajo",
    newListTask: workItems
  });
});

app.post('/work', function(req, res){
  let item = req.body.newTask;
  workItems.push(item);
  res.redirect("/work");
})

app.get('/about', function(req, res){
  res.render("about");
})

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
