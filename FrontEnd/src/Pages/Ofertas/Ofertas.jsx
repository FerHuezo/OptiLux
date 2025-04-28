import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/footer/footer';

// Productos de ejemplo (puedes obtener estos de una base de datos o API)
const productosOfertas = [
  {
    id: 1,
    nombre: "Lentes de Sol Elegantes",
    precio: 59.99,
    imagen: "url-a-imagen-lentes.jpg",
    ruta: "/Productos/1"
  },
  {
    id: 2,
    nombre: "Lentes de Sol de Marca",
    precio: 79.99,
    imagen: "url-a-imagen-lentes2.jpg",
    ruta: "/producto/2"
  },
  {
    id: 3,
    nombre: "Lentes de Sol Deportivo",
    precio: 49.99,
    imagen: "url-a-imagen-lentes3.jpg",
    ruta: "/producto/3"
  },
];

const Ofertas = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100 py-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">Ofertas Especiales</h2>
        <div className="w-20 h-1 mx-auto bg-[#8CA9AD] mb-10"></div>
        
        {/* Contenedor de productos en oferta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto mt-5">
          {productosOfertas.map((producto) => (
            <div key={producto.id} className="rounded-lg shadow-md overflow-hidden bg-white cursor-pointer">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                <p className="text-lg text-gray-600">${producto.precio}</p>
                <a href={producto.ruta}>
                  <button className="mt-4 bg-green-800 text-white py-2 px-6 rounded-md hover:bg-[#8CA9AD] rounded-xl">
                    Ver Producto
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ofertas;
