

exports.index = function(req, res){
  var title = "Test Todo App"
  res.render('index', { title: title });
};
