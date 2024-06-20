// Importa Express correctamente usando CommonJS require
const express = require('express');
const app = express();

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Lee el puerto desde las variables de entorno
const port = process.env.PORT || 3000; // Establece un puerto por defecto si no está definido en .env

// Define la ruta principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia el servidor Express
app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
