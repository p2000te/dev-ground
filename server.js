'use stict';
//
//
//
//
//



var path       =    require('path');

const localRoot = path.resolve(__dirname);
const localPublicRoot = path.join(appRootAbsPath,'static');

var express     =   require('express');
var bodyParser  =   require('body-parser');

const server   =  express();
      server.set( 'localRoot', localRoot );
      server.set( 'localPublicRoot', localPublicRoot );

const wwwRoot  =  express.static(wwwRootAbsPath);
const serveStatic = express.Router();
    setver.set('appRoot', path.resolve(__dirname));

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded());
    server.use( '/static',  );

    server.use('/ftp', function( req, res ) {
        res.send( 'OK' );
    });

    server.get( '/', function(req, res){
        res.location( req.path );
        res.status( 204 );
        res.send('NO CONTENT');
    });

server.listen( 3000, '127.0.0.1' );
/*module.exports = server;*/
console.log('Server listening at 127.0.0.1:3001...');
