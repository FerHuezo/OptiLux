import { config } from "./src/config.js"
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect("http://localhost:4000/api/importLenses"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const importLenses = mongoose.model('importLensesModel', {
  nombre: String,
  estado: String
});

app.get('/api/importLenses', async (req, res) => {
  const cantidadActivos = await importLenses.countDocuments({ estado: 'activo' });
  res.json({ activos: cantidadActivos });

});

app.listen(config.server.PORT, () => {
  console.log('Servidor backend corriendo en URI');
});
