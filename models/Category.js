// aca vamos a crear la plantilla de solamente la categoría de mis comics en la base de datos.

import mongoose from "mongoose";
// importamos mongoose, recordar que la conexión con mongoose esta en config/database.js


const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    ranking: {type: Number} ,
    examples: [{type: String }],
    detail: {type: String, required: true},
    user_id: {type: String, required: true}

}, {timestamps: true})
// creamos esquema o plantilla de mi objeto, con un método de mongoose llamado .Schema. que pide un objeto y adentro definimos los nombres de las propiedades de mi objeto.

// miramos la el objeto categories que esta en categories.js y traemos los nombres de las propiedades dentro de este objeto.

// a estas propiedades le indicamos que tipo de propiedad es con type: y si es required, el required lo que nos dice es que este dato tiene que estar si o si para que se guarde en la base de datos, si este dato no esta mi const no se guarda en la base de datos.

// luego pasamos un segundo parámetro que es el timestamp es la marca temporal de cuando se crea esto en la base de datos


export const Category = mongoose.model ('category', categorySchema)
// para exportar usamos un método de mongoose que se llama .model que crea un modelo a partir de mi esquema y el segundo parámetro es el esquema en si mismo, el primer parámetro dentro del parenthesis es el nombre que va a tener mi elemento en la database.
