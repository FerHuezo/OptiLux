import React from "react";
import "./card.css";

const TerminalCard = ({ terminalLen, deleteTerminalLenses, update }) => {
  if (!terminalLen) {
    return <div className="product-loading">Cargando...</div>;
  }

  return (
    <div className="product-card">
      <h3 className="product-title">Tipo de aro: {terminalLen.typeTerminals}</h3>
      <p><span className="label">Precio:</span> ${terminalLen.price}</p>
      <div className="product-actions">
        <button
          onClick={() => deleteTerminalLenses(terminalLen._id)}
          className="btn btn-delete"
        >
          Eliminar
        </button>
        <button
          onClick={() => update(terminalLen)}
          className="btn btn-edit"
        >
          Editar
        </button>
      </div>
    </div>
  );
};
export default TerminalCard;