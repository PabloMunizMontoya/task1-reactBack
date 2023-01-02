
// aca van a estar las configuraciones respecto a middleWorks


import createError from 'http-errors';
// aca importamos una librería externa, que esta instalada en el packaging.json.

import express from 'express';
// requerimos el freamwork principal que es express, para facilitar el desarrollo de la API.

import path from 'path';
// path es un modulo nativo de node js

import cookieParser from 'cookie-parser';
// es una dependencia de terceros, este no lo vamos a utilizar.

import logger from 'morgan';
// dependencia de terceros. Herramienta de registro para registrar errores y solicitudes. 

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

import {__dirname} from './utils.js'
// aca se importa con llaves por que en utils.js si nos fijamos estamos exportando dos cosas en un mismo objeto, as i que cuando pasa esto usamos llaves. esto es desestructurar la variable 

import 'dotenv/config.js'
// importamos el dot env, que nos permite leer las variables de entorno del archivo .env que nos trae la base de datos

let app = express();
// instainiciar express que esta en la linea 8 

// view engine setup

app.set('views', path.join(__dirname, 'views'));
// aca path por ejemplo lo utiliza para juntar diferentes tipos de strings en un solo string que va a ser la ruta de nuestra carpeta, esto con el método .join, path tiene varios métodos.
// el método .set sirve para configurar las vistas, también sirve para setear el puerto

app.set('view engine', 'ejs');
// Seteamos nuestro motor de vistas al js.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// el método .use le obliga a la aplicación usar algo. 

app.use('/', indexRouter);
// cualquier tipo de petición que se haga a mi ruta voy a responder con indexRouter, que esta en /routes/index.js

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
