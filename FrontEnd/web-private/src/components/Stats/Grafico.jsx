import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const GraficoActivos = () => {
  const [cantidadActivos, setCantidadActivos] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4000/api/importLenses')
      .then(res => setCantidadActivos(res.data.activos))
      .catch(err => console.error(err));
  }, []);

  const data = [
    { name: 'Productos Importados', cantidad: cantidadActivos }
  ];

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="cantidad" fill="#82ca9d" />
    </BarChart>
  );
};

export default GraficoActivos;


