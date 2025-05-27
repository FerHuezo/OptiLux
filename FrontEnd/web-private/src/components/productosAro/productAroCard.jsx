import React from "react";
import "./card.css"

/*no he cambiado esto* /
const AumentoCard = ({ increaseLen, deleteIncreaseLenses, update }) => {
  if (!increaseLen) {
    return <div className="product-loading">Cargando...</div>;
  }

  return (
    <div className="product-card">
      <h3 className="product-title">Aumento: {increaseLen.increaseLevel}</h3>
      <p><span className="label">Precio:</span> ${increaseLen.price}</p>
      <div className="product-actions">
        <button
          onClick={() => deleteIncreaseLenses(increaseLen._id)}
          className="btn btn-delete"
        >
          Eliminar
        </button>
        <button
          onClick={() => update(increaseLen)}
          className="btn btn-edit"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default AumentoCard;