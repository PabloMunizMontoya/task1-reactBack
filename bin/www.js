#!/usr/bin/env node

// aca va a estar la creación del servidor en el www entero, se ocupa de crear el servidor

/**
 * Module dependencies.
 */

import app from '../app.js';


import debug from 'debug';
const logger = debug('task-reactbackend:server');
// modulo que tenemos que instalar, creado por terceras personas

import http from 'http';
// modulo nativo de Node js, es el que nos permite crear el servidor.



/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || '3000');
// normaliza el puerto, obtiene el puerto de las variables de entorno, si no usa el puerto por defecto port 3000.  Aca obtenemos el puerto, se almacena en port.

app.set('port', port);
// setea una variable a nivel de aplicación, utilizando el contexto de express. Seteamos el puerto en nivel aplicación. en la pagina app.js .set seteaba una vista aca seteamos un puerto.



/**
 * Create HTTP server.
 */

let server = http.createServer(app);
// aca creamos el servidor http, con el modulo http de arriba se almacena en la variable http, ese modulo tiene un método que se llama create server y create server acepta configuraciones que en este caso creamos en app, una vez creamos ese servidor lo almacenamos en un variable que se llama server. Lo que se almacena aquí es en realidad el proceso del a creación del servidor.

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => console.log(port));
// le agregamos un escuchador de eventos al server creado en el paso anterior, ese proceso de creación dispone de ciertos tipos de eventos, entonces vamos a escuchar los errores  y mientras que el servidor escucha el puerto en buena confección, entonces si hay algún error  va a ejecutar server.on error y si escucha la buena concesión va a ejecutar server.on listening. mientras que esto ultimo pase va a ejecutar la función onListening, y si escucha el error ejecuta la función onError.

server.on('error', onError);
server.on('listening', onListening);
// el método on escucha errores en el servidor.

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
// función que verifica que el puerto sea un numero.

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  logger('Listening on ' + bind);
}
