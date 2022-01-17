let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Student Model
let todoSchema = require("../models/todo");
  
// CREATE Student
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
  
// READ Students
router.get("/todos", (req, res) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

  // Update Student Data
  router.put("/updatetodo/:id", (req, res) => {
    todoSchema.findOneAndUpdate(
      {id: req.params.id}, 
      {$set: {is_completed: req.body.status }
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


  
// Delete Student
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