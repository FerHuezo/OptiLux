// src/components/BrandPage.jsx
import React from 'react';
import './Marcas.css';
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/footer/footer';

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
  {
    name: 'Gucci',
    description: 'Moda de lujo con diseños sofisticados y elegantes.',
    img: '/img/gucci.png',
  },
  {
    name: 'Versace',
    description: 'Diseños llamativos y estilo italiano audaz.',
    img: '/img/versace.png',
  },
  {
    name: 'Tom Ford',
    description: 'Lentes de alta gama con diseño moderno y refinado.',
    img: '/img/tomford.png',
  },
  {
    name: 'Persol',
    description: 'Artesanía italiana con tradición y calidad premium.',
    img: '/img/persol.png',
  },
  {
    name: 'Carrera',
    description: 'Inspiración deportiva y diseño urbano vibrante.',
    img: '/img/carrera.png',
  },
  {
    name: 'Michael Kors',
    description: 'Estilo sofisticado con un toque casual y elegante.',
    img: '/img/michaelkors.png',
  },
  {
    name: 'Armani Exchange',
    description: 'Diseños jóvenes, urbanos y modernos.',
    img: '/img/armanix.png',
  },
  {
    name: 'Balenciaga',
    description: 'Moda de alta costura con diseños únicos y vanguardistas.',
    img: '/img/balenciaga.png',
  },
  {
    name: 'Hugo Boss',
    description: 'Minimalismo alemán y elegancia contemporánea.',
    img: '/img/hugoboss.png',
  },
  {
    name: 'Chanel',
    description: 'Lujo clásico con detalles atemporales.',
    img: '/img/chanel.png',
  },
  {
    name: 'Dior',
    description: 'Diseños refinados, elegancia y tendencias de moda.',
    img: '/img/dior.png',
  },
  {
    name: 'Vogue Eyewear',
    description: 'Diseño joven, moderno y accesible.',
    img: '/img/vogue.png',
  },
  {
    name: 'Maui Jim',
    description: 'Lentes de sol premium con tecnología polarizada avanzada.',
    img: '/img/mauijim.png',
  },
  {
    name: 'Costa Del Mar',
    description: 'Especialistas en lentes de sol para actividades acuáticas.',
    img: '/img/costadelmar.png',
  },
  {
    name: 'Warby Parker',
    description: 'Diseño moderno, accesibilidad y enfoque digital.',
    img: '/img/warbyparker.png',
  },
  {
    name: 'Gentle Monster',
    description: 'Diseño coreano innovador con estética de vanguardia.',
    img: '/img/gentlemonster.png',
  },
  {
    name: 'Bvlgari',
    description: 'Lujo y exclusividad en cada detalle.',
    img: '/img/bvlgari.png',
  },
  {
    name: 'Burberry',
    description: 'Estilo británico clásico con toques modernos.',
    img: '/img/burberry.png',
  },
  {
    name: 'Fendi',
    description: 'Estilo glamoroso con diseños artísticos únicos.',
    img: '/img/fendi.png',
  },
  {
    name: 'Dolce & Gabbana',
    description: 'Diseños llamativos, estilo mediterráneo y lujo italiano.',
    img: '/img/dolcegabbana.png',
  },
  {
    name: 'Givenchy',
    description: 'Alta costura con un enfoque moderno y minimalista.',
    img: '/img/givenchy.png',
  }
];

const BrandPage = () => {
  return (
    <div className="brand-page">
      <NavBar/> 
      <section className="hero">
        <h1>Descubre las Mejores Marcas de Lentes</h1>
        <p>Estilo, comodidad y protección para tus ojos.</p>
        <a href="#marcas" className="btn">Ver Marcas</a>
      </section>

      <section id="marcas" className="marcas">
        <h2>Marcas Destacadas con OptiLux</h2>
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
          <Footer/>
    </div>
  );
};

export default BrandPage;
