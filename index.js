const express = require('express');
const dbConnection = require('./database/config');
require('dotenv').config();
const cors = require('cors');

// console.log(process.env)

//crear el servidor de express
const app = express();

dbConnection();

app.use(cors());

//directorio publico
//use es como un middleware, la cual es una funcion que se ejecuta cada vez que pasa por determinado lugar
app.use(express.static('public'));

// Lectura y parseo del body: lee y procesa lo que viene en el body de la peticion json (middleware)
app.use(express.json());

//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));




//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});