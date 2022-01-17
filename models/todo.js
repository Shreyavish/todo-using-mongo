const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let todoSchema = new Schema({
  id: {
    type: Number
  },
  text: {
    type: String
  },
  is_completed: {
    type: String
  }
},
 {
    collection: 'todos'
  })
  
module.exports = mongoose.model('todo', todoSchema)