// Importamos Express desde la carpeta node_modules
const express = require('express');
const cors = require("cors");

// Creamos la aplicación de Express
const app = express();
app.use(cors())
app.use(express.json())

// Escojemos un puerto por el que el servidor web escuchará
const port = 3000;

// Página para visualizar el mensaje "¡Hola Express!"
app.get('/', (req, res) => {
  res.send("./assets/F1A.jpeg");
});

// Activamos el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`¡Servidor listo!`);
});