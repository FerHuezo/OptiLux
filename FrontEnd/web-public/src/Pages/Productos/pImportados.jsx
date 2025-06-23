import React, { useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/footer";
import "./pImportados.css";

import color1 from '../../assets/color1.png'
import color2 from '../../assets/color2.png'
import color3 from '../../assets/color3.png'
import color4 from '../../assets/color4.png'
import color5 from '../../assets/color5.png'
import color6 from '../../assets/color6.png'
import color7 from '../../assets/color7.png'

import ListProducts from '../../components/Products/List'
import useDataProducts from "../../hooks/useDataProducts.jsx"; // hook personalizado

const Pimportados = () => {
    const { products, loading, error } = useDataProducts();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState(100);

  const filteredProducts = products.filter((product) => {
    const matchColor = selectedColor ? product.color === selectedColor : true;
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchPrice = product.price <= priceRange * 25;

    return matchColor && matchCategory && matchPrice;
  });

  return (
    <>
      <Navbar />

      <div>
        <div className="bar">
          <a href="/Productos/Importados"><strong>Importados</strong></a>
          <a href="/Productos/Personalizados"><strong>Personalizar</strong></a>
        </div>

        <div className="contenedor">
          <div className="cuadrado">
            <h2>Categorías</h2>
            <ul>
              <li onClick={() => setSelectedCategory("Ovalados")}>Ovalados</li>
              <li onClick={() => setSelectedCategory("Redondos")}>Redondos</li>
              <li onClick={() => setSelectedCategory("Aviadores")}>Aviadores</li>
              <li onClick={() => setSelectedCategory("Agatados")}>Agatados</li>
            </ul>

            <h2>Filtrar por</h2>
            <p>Color:</p>
            <div className="coloresdiv">
              <img src={color1} onClick={() => setSelectedColor("Amarillo")} />
              <img src={color2} onClick={() => setSelectedColor("Azul")} />
              <img src={color3} onClick={() => setSelectedColor("Blanco")} />
              <img src={color4} onClick={() => setSelectedColor("Rojo")} />
              <img src={color5} onClick={() => setSelectedColor("Verde")} />
              <img src={color6} onClick={() => setSelectedColor("Naranja")} />
              <img src={color7} onClick={() => setSelectedColor("Morado")} />
            </div>
            <br />

            <p>Rango de precio</p>
            <input
              type="range"
              min="0"
              max="2500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
            <div id="rangopequeño">
              <p>$0</p><p>$2500</p>
            </div>
            <br />

            <button onClick={() => {
              setSelectedColor(null);
              setSelectedCategory(null);
              setPriceRange(100);
            }}>Quitar filtros</button>
          </div>

        <div className="contenedorprod">
        {loading && <p>Cargando productos...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && <ListProducts products={filteredProducts} />}
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pimportados;