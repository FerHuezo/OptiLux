// src/components/BrandPage.jsx
import React from 'react';
import './BrandPage.css';

const brands = [
  {
    name: 'Ray-Ban',
    description: 'Clásico e icónico. Estilo que nunca pasa de moda.',
    img: '/img/rayban.png',
  },
  {
    name: 'Oakley',
    description: 'Lentes deportivos con tecnología de alto rendimiento.',
    img: '/img/oakley.png',
  },
  {
    name: 'Prada',
    description: 'Elegancia italiana y diseño de vanguardia.',
    img: '/img/prada.png',
  },
  // Agrega más marcas si lo deseas
];

const BrandPage = () => {
  return (
    <div className="brand-page">
      <header className="header">
        <div className="logo">LentesTop</div>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Marcas</a></li>
            <li><a href="#">Lentes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Descubre las Mejores Marcas de Lentes</h1>
        <p>Estilo, comodidad y protección para tus ojos.</p>
        <a href="#marcas" className="btn">Ver Marcas</a>
      </section>

      <section id="marcas" className="marcas">
        <h2>Marcas Destacadas</h2>
        <div className="marca-grid">
          {brands.map((brand, index) => (
            <div className="marca" key={index}>
              <img src={brand.img} alt={brand.name} />
              <h3>{brand.name}</h3>
              <p>{brand.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 LentesTop. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default BrandPage;
