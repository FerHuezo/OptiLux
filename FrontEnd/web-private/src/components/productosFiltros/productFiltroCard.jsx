import React from "react";
import "./card.css"


const FiltroCard = ({ filterLen, deleteFilterLenses, update }) => {
  if (!filterLen) {
    return <div className="product-loading">Cargando...</div>;
  }

  return (
    <div className="product-card">
      <img
        src={filterLen.imageUrl}
        alt="Producto"
        className="product-image"
      />
      <h3 className="product-title">Marca: {filterLen.typeFilter}</h3>
      <p><span className="label">Precio:</span> ${filterLen.price}</p>
      <div className="product-actions">
        <button
          onClick={() => deleteFilterLenses(filterLen._id)}
          className="btn btn-delete"
        >
          Eliminar
        </button>
        <button
          onClick={() => update(filterLen)}
          className="btn btn-edit"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default FiltroCard;
