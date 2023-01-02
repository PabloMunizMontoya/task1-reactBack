import 'dotenv/config.js'
// importamos la configuración del dot env, recordar que esto fue instalado en el paquete dot env, recordar que dot env nos permite leer las variables en el archivo .env, sin esto el archivo .env en la raíz no se puede leer por lo tanto no funciona el subir al database. este paquete se instalo por medio de npm install dotenv y se aloja en los node modules.


import '../../config/database.js'
// importamos la configuración en la base de datos database.js recordar que database.js crea la configuración para mi conexión con mi base de datos.


import { Category } from '../Category.js'
// importo mi modelo que es el molde de cada categoría. el molde fue creado en Category.js


let categories = [
    {
        name: "shonen",
        ranking: 1,
        examples: ["Dragon Ball","Jujutsu Kaisen"],
        detail: "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
        user_id: "63ac47d8b4db2f7baacad498"
    },{
        name: "manhwa",
        ranking: 2,
        examples: ["The God of High School","Solo Leveling","Tower of god"],
        detail: "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
        user_id: "63ac47d8b4db2f7baacad498"
    },{
        name: "marvel",
        ranking: 3,
        examples: ["Daredevil","Spiderman","House Of M"],
        detail: "American superhero comics",
        user_id: "63ac47d8b4db2f7baacad498"
    },{
        name: "dc",
        ranking: 4,
        examples: ["Batman","Aquaman","Superman"],
        detail: "American superhero comics",
        user_id: "63ac47d8b4db2f7baacad498"
    },{
        name: "shojo",
        ranking: 5,
        examples: ["Nana","Fruits Basket"],
        detail: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        user_id: "63ac47d8b4db2f7baacad498"
    },{
        name: "seinen",
        ranking: 6,
        examples: ["Shuumatsu no Valkyrie","One Punch Man"],
        detail: "Japanese seinen tells stories with a mature tone.",
        user_id: "63ac47d8b4db2f7baacad498"
    }
]

Category.insertMany(categories)
// con este métodos de mongo cargamos la data a la base de datos, en este caso el insertMany permite crear muchos documentos a la vez.