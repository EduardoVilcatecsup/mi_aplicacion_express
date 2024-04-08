const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express!');
});

app.get('/clientes', (req, res) => {
  const clientes = ['Eduardo ', 'Citlalli', 'Cesar'];
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  const productos = ['Pan', 'Papel', 'Tortilla'];
  res.json(productos);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
