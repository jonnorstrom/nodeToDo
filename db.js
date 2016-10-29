var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
  content    :String,
  updated_at :Date
});


mongoose.model('Todo', Todo);
mongoose.connect('mongodb://127.0.0.1/todo');
