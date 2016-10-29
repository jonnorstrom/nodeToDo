var mongoose = require( 'mongoose' );
var Todo     = mongoose.model('Todo');

exports.show = function(req, res){
  Todo.find(function(err, todos, count){
    res.render('index', {
      title   : 'Title',
      todos   : todos
    });
  });
};

exports.create = function(req, res) {
  new Todo({
    content     : req.body.content,
    updated_at  : Date.now()
  }).save(function(err, todo, count){
    res.redirect('/');
  })
}

exports.destroy = function(req, res) {
  Todo.findById(req.params.id, function(err, todo){
    todo.remove(function(err, todo){
      res.redirect('/');
    });
  });
};

exports.edit = function(req, res) {
  Todo.findOne({"_id": req.params.id}, function(err, todo){
    console.log(todo);
    res.render('edit', {
      title   : "Editing an item",
      todo   : todo,
    });
  });
};

exports.update = function(req, res) {
  Todo.findById(req.params.id, function(err, todo){
    todo.content     = req.body.content;
    todo.updated_at  = Date.now();
    todo.save( function(err, todo, count){
      res.redirect('/')
    });
  });
};
