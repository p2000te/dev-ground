'use stict';

var path       =    require('path');
var localRoot = path.resolve(__dirname);
var localPublicRoot = path.join(localRoot,'static');

var express     =   require('express');
var bodyParser  =   require('body-parser');

var server   =  express();

server.set( 'localRoot', localRoot );
server.set( 'localPublicRoot', localPublicRoot );

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use( '/static', express.static(localPublicRoot) );

server.post('/ftp/:localPath', function( req, res ) {
    var rel = decodeURIComponent(req.params.localPath);

    res.status(201).send( 'OK' );
});

server.get( '/', function(req, res){
    res.redirect('http://127.0.0.1:3000/static/index.html');
});

server.listen( 3000, '127.0.0.1' );
/*module.exports = server;*/
console.log('Server listening at 127.0.0.1:3001...');
