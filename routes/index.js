import express from 'express';

let router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  // si yo hago una petición get a esta ruta (que esta en app.js - app. use) se ejecuta esta función. y la función se llama controlador.
  
  res.render('index', { title: 'Express' });
  // luego pasa a esta función que me renderiza indexedDB.ejs que esta en la carpeta views.
  
});

export default router
