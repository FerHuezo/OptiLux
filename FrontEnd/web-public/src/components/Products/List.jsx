import React, { useState, useRef, useEffect } from "react";
import Card from "./Card.jsx";
import { useCart } from '../../context/useCart';
import toast from 'react-hot-toast';

const ListProducts = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef(null);
  const { addToCart } = useCart(); // 👈 Lo usamos aquí
  const { cartItems } = useCart();
  console.log("🛒 Productos en carrito:", cartItems);
  const closeModal = () => setSelectedProduct(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    closeModal();
    toast.success('¡Producto añadido!', {
      duration: 2500,
      icon: '🛒',
      style: {
        background: '#333',
        color: '#fff',
      },
    });  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (selectedProduct) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedProduct]);

  return (
    <div>
      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center mt-5 text-black">
        {products?.map((product) => (
          <Card
            key={product._id}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </div>

      {/* Modal elegante */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="relative w-[95%] max-w-lg rounded-3xl bg-white/20 border border-white/30 backdrop-blur-xl text-white shadow-xl p-6 animate-fade-in overflow-hidden"
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-white text-3xl font-light hover:text-rose-400 transition duration-200"
            >
              &times;
            </button>

            {/* Imagen */}
            {selectedProduct.img && (
              <img
                src={selectedProduct.img}
                alt="Lente"
                className="w-full h-60 object-cover rounded-2xl shadow-md mb-6 border border-white/30"
              />
            )}

            {/* Info */}
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-center">
              {selectedProduct.brand}
            </h2>

            <div className="grid grid-cols-2 gap-4 text-sm text-white/100 mb-6">
              <p className="text-white"><span className="font-semibold text-white">Color:</span > {selectedProduct.color}</p>
              <p className="text-white"><span className="font-semibold text-white">Aumento:</span> {selectedProduct.increaseLenses}</p>
              <p className="text-white"><span className="font-semibold text-white">Cantidad:</span> {selectedProduct.amount}</p>
              <p className="text-white"><span className="font-semibold text-white">Precio:</span> ${selectedProduct.price.toFixed(2)}</p>
            </div>

            {/* Botón agregar */}
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold shadow-md hover:shadow-lg transition duration-300"
            >
              Agregar al carrito 🛒
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProducts;
