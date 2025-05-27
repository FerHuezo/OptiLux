import React from "react";
import "./card.css";

const ProductCard = ({ importLen, deleteImportLenses, update }) => {
  if (!importLen) {
    return <div className="product-loading">Cargando...</div>;
  }

  return (
    <div className="product-card">
      <img
        src={importLen.imageUrl}
        alt="Producto"
        className="product-image"
      />
      <h3 className="product-title">Marca: {importLen.brand}</h3>
      <p><span className="label">Color:</span> {importLen.color}</p>
      <p><span className="label">Cantidad:</span> {importLen.amount}</p>
      <p><span className="label">Precio:</span> ${importLen.price}</p>
      <p><span className="label">Aumento:</span> {importLen.increaseLenses}</p>
      <div className="product-actions">
        <button
          onClick={() => deleteImportLenses(importLen._id)}
          className="btn btn-delete"
        >
          Eliminar
        </button>
        <button
          onClick={() => update(importLen)}
          className="btn btn-edit"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
