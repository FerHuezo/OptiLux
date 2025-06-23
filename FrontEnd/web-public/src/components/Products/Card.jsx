import React from "react";

const Card = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="cursor-pointer max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-300 hover:scale-105 transition-transform duration-300"
    >
      {product.img && (
        <img
          src={product.img}
          alt={`Lente ${product.brand}`}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="px-4 py-3">
        <h3 className="text-lg font-bold text-black mb-2">
          {product._id?.slice(-4)}
        </h3>
        <p className="text-sm text-black">Color: {product.color}</p>
        <p className="text-sm text-black">Aumento: {product.increaseLenses}</p>
        <p className="text-sm text-black">Stock: {product.amount}</p>
        <p className="text-md font-bold text-black mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Card;