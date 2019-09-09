const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Crear conexión a la BD
const db = require('./config/db');

// Importando el modelo
require('./models/Proyectos');

// con .sync se crea la tabla definida en el modelo
db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch(error => console.log(error));

// crear una app de express
const app = express();

// donde cargar los archivos estaticos
app.use(express.static('public'));

// habilitar pug
app.set('view engine', 'pug');

// añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// habilitar bodyParser para leer datos del formulario
app.use(express.urlencoded({extended: true}));

app.use('/', routes());


app.listen(3000);
