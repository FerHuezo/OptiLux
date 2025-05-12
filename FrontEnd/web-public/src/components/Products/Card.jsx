import React from "react";

const BrandCard = ({ product }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <picture href={product.img}></picture>
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
            {product.name}
          <span className="text-xl font-medium text-gray-700">
            {product.price}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default BrandCard;
