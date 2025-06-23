import React from "react";
import "./registerCustomLenses.css";

const RegisterCustomLenses = ({
  id,
  totalPrice,
  increase,
  increseSelected,
  setIncreaseSelected,
  filter,
  filterSelected,
  setFilterSelected,
  ring,
  ringSelected,
  setRingSelected,
  terminals,
  terminalsSelected,
  setTerminalsSelected,
  saveCustomLenses,
  handleEdit,
}) => {
  return (
    <div className="form-container">
      <h2 className="form-title">
        {id ? "Editar Lente Personalizado" : "Registrar Lente Personalizado"}
      </h2>

      <div className="form-grid">
        {/* Columna izquierda */}
        <div className="form-column">
          <div className="form-group">
            <label className="form-label">Aumento</label>
            <select
              className="form-select"
              value={increseSelected}
              onChange={(e) => setIncreaseSelected(e.target.value)}
            >
              <option disabled value="">Seleccione un aumento</option>
              {increase.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.increaseLevel}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Filtro</label>
            <select
              className="form-select"
              value={filterSelected}
              onChange={(e) => setFilterSelected(e.target.value)}
            >
              <option  disabled value="">Seleccione un filtro</option>
              {filter.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.typeFilter}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="form-column">
          <div className="form-group">
            <label className="form-label">Tipo de aro</label>
            <select
              className="form-select"
              value={ringSelected}
              onChange={(e) => setRingSelected(e.target.value)}
            >
              <option disabled value="">Seleccione un aro</option>
              {ring.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.typeLens}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Terminal</label>
            <select
              className="form-select"
              value={terminalsSelected}
              onChange={(e) => setTerminalsSelected(e.target.value)}
            >
              <option disabled value="">Seleccione una terminal</option>
              {terminals.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.typeTerminals}
                </option>
              ))}
            </select>
          </div>

         {/*          <div className="form-group">
            <label className="form-label">Precio</label>
            <input
              type="number"
              placeholder="Precio"
              className="form-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>*/}

            <div className="form-group">
            <label className="form-label">Precio total estimado</label>
            <input
                type="text"
                className="form-input"
                value={`$${totalPrice.toFixed(2)}`}
                readOnly
            />
            </div>

        </div>
      </div>

      <div className="form-button-container">
        <button
          className="form-button"
          onClick={(e) => (id ? handleEdit(e) : saveCustomLenses(e))}
        >
          {id ? "Editar" : "Guardar"}
        </button>
      </div>
    </div>
  );
};

export default RegisterCustomLenses;
