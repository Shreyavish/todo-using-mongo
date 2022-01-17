
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

const app = express();

app.use(express.json());


const router = require('./routes/todo.route');
const username = "shreyavish";
const password = "Shreya20@-";
const cluster = "cluster0.4cb3c";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://shreyavish:Shreya20%40-@cluster0.4cb3c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
 
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(router);
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
/*
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
  
// Express Route
const todoRoute = require('../todo-using-monog/routes/todo.route')
  
// Configure mongoDB Database
//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology', true);
  
// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
  console.log('Database successfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)
  
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/todos', todoRoute)
  
  
// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
  
// 404 Error
app.use((req, res, next) => {
  res.status(404).send('Error 404!')
});
  
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});




















/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

var app = express();
const port = 3000;

//app.use(express.static(path.resolve(__dirname, "../todo/build")));


/*f (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('.todo/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'todo', 'build', 'index.js'));
  });
}*/

/*
app.use(require('cors')());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const noop = () => {};*/


/*if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('todo/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/app/todo/build/index.html'));
  });
}*/
//app.use(express.static(path.join(__dirname, 'todo/build')));
//app.get('*', function (req, res) {
 // res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});
/*
var obj = {
    list: [{" ": " "}]
 };
 app.post('/todos', function(req, res) {
    //var Keywords = req.body.Keywords;
    const todo = req.body.task;
    console.log(todo);
    fs.readFile('todos.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            
        obj = JSON.parse(data); //now it an object
      //  console.log(todo);

       console.log(obj);

        obj.push(todo); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFileSync('todos.json', json, 'utf8', noop); // write it back 
    res.status(200).send(obj);
    }});
  });


  app.put('/updatetodo/:id/:payload', function(req,res){


    
    fs.readFile('todos.json', (err, data) => {
        // Catch this!
        if (err) throw err;
      
        const loadedtodos = JSON.parse(data);
       // console.log(loadedtodos);

        var tasks = loadedtodos;

       // console.log(tasks);
        try {
            var i;
            for (i = 0; i < tasks.length; i++) {
                
            if(tasks[i]!=null){
                taskid = tasks[i].id;
                        if (req.params.id == taskid) {
                            
                            tasks[i].is_completed = req.params.payload
                            //return message.channel.send(message.author + " Command " + jsonCmd + " deleted!");

                            
                          
                        }
            }

              
            }
          } catch (err) {
            console.log(err);
          }

    
            json = JSON.stringify(tasks); //convert it back to json
            fs.writeFileSync('todos.json', json, 'utf8', noop); 
            res.status(200).send("done");
    
    });


  })

app.get('/gettodos', function(req,res){


  fs.readFile('todos.json', (err, data) => {
    // Catch this!
    if (err) throw err;
  
    const loadedtodos = JSON.parse(data);
    console.log(loadedtodos);
    res.status(200).send(loadedtodos);
});

});

app.delete('/deletetodo/:id',function(req,res){

    fs.readFile('todos.json', (err, data) => {
        // Catch this!
        if (err) throw err;
      
        const loadedtodos = JSON.parse(data);
       // console.log(loadedtodos);

        var tasks = loadedtodos;

       // console.log(tasks);
        try {
            var i;
            for (i = 0; i < tasks.length; i++) {
                
            if(tasks[i]!=null){
                taskid = tasks[i].id;
                console.log(taskid)
                console.log(req.params.id)
                        if (req.params.id == taskid) {
                            
                            delete tasks[i];
                            //return message.channel.send(message.author + " Command " + jsonCmd + " deleted!");

                            
                          
                        }
            }

              
            }
          } catch (err) {
            console.log(err);
          }

          const arrFiltered = tasks.filter(el => {
            return el != null && el != '';
          });

          //tasks = tasks.filter(x => x !== null)
            console.log(arrFiltered)
            json = JSON.stringify(arrFiltered); //convert it back to json
            fs.writeFileSync('todos.json', json, 'utf8', noop); 
            res.status(200).send("done");
    
    });


})







app.listen((process.env.PORT || 3000), () => console.log(`Hello world app listening on port ${port}!`));*/
