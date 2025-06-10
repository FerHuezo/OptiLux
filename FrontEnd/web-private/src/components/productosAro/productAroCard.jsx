import React from "react";
import "./card.css"

const RingCard = ({ aroLen, deleteRingLenses, update }) => {
  if (!aroLen) {
    return <div className="product-loading">Cargando...</div>;
  }

  return (
    <div className="product-card">
      <h3 className="product-title">Tipo de aro: {aroLen.typeLens}</h3>
      <p><span className="label">Precio:</span> ${aroLen.price}</p>
      <div className="product-actions">
        <button
          onClick={() => deleteRingLenses(aroLen._id)}
          className="btn btn-delete"
        >
          Eliminar
        </button>
        <button
          onClick={() => update(aroLen)}
          className="btn btn-edit"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default RingCard;