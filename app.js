
/**
 * Module dependencies.
 */

 // mongoose steup
require ('./db')

var express   = require('express');
var routes    = require('./routes/index');
var engine    = require( 'ejs-locals' );
var static    = require( 'serve-static' );
// var user = require('./routes/user');
var http      = require('http');
var path      = require('path');
var app       = express();
// all environments
app.use(express.static(path.join(__dirname, 'public')));
app.set( 'port', process.env.PORT || 3000 );
app.engine( 'ejs', engine );
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'ejs' );
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.show);
app.post('/create', routes.create);
app.delete('/destroy/:id', routes.destroy);
app.get('/edit/:id', routes.edit);
app.put('/update/:id', routes.update);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
