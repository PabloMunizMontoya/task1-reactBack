// aca creamos la conexión con la base de datos.

import mongoose from "mongoose";

const options = {
    useUnifiedTopology : true,

    useNewUrlParser: true
}



// método de mongoose .connect que acepta dos parámetros, la variable de entorno y options, a mongo uri la tengo que traer de mis variables de entorno entonces la traigo como process...
// y options es un objeto declaramos variable y le damos valor a la misma. 
mongoose.connect(process.env.MONGO_URI, options)
    .then(() => console.log('Database connected'))
    .catch (err => console.log(err))

// lo que hace mongoose.connect es devolver una promesa, entonces siempre es buena practica agregar el then y el catch para informar si conecta con la base de datos o si hay algún error.    
