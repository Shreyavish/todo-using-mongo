let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// todo Model
let todoSchema = require("../models/todo");
  
// CREATE todo
router.post("/createtodo", (req, res, next) => {
  todoSchema.create(req.body.task, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
  
// READ todos
router.get("/gettodos", (req, res) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

  // Update todo Data
  router.put("/updatetodo/:id/:payload", (req, res) => {
    todoSchema.findOneAndUpdate(
      {id: req.params.id}, 
      {$set: {is_completed: req.params.payload }
    },
     {new: true}, 
     (err, doc) => {
      if (err) {
          console.log("Something wrong when updating data!");
      }
      else{
        res.send("done");
      }
      console.log(doc);
  });
  });


  
// Delete todo task
router.delete("/deletetodo/:id", 
(req, res, next) => {
  todoSchema.findOneAndDelete(
      {"id" : req.params.id}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
  
module.exports = router;
