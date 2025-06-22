//import { config } from "./src/config.js"
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect("http://localhost:4000/api/orders"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const importOrders = mongoose.model('ordersModel', {
  nombre: String,
  estado: String
}
);

app.get('/api/orders', async (req, res) => {
  const cantidadActivos = await importOrders.countDocuments({ estado: 'activo' });
  res.json({ activos: cantidadActivos });

}

);

app.listen(4000, () => {
  console.log('Servidor backend corriendo en URI');
});
