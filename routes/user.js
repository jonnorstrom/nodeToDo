var mongoose = require( 'mongoose' );
var Todo     = mongoose.model('Todo');
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
