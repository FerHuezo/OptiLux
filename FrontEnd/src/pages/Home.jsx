import React from 'react';
import Navbar from '../components/NavBar/NavBar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Bienvenido a OptiLux</h1>
        <p style={{ marginTop: '20px' }}>
          Aquí irá el contenido principal de la página de inicio.
        </p>
      </div>
    </div>
  );
};

export default Home;