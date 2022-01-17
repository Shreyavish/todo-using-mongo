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
router.get("/gettodos", (req, res) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

  // Update Student Data
  router.put("/updatetodo", (req, res, next) => {
    todoSchema.findByIdAndUpdate(
      req.params.id,
      {
        $$set: { is_completed: req.body.status } 
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Student updated successfully !");
        }
      }
    );
  });
  
// Delete Student
router.delete("/deletetodo/:id", 
(req, res, next) => {
  todoSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
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