import React from "react";
import "./registerCustomLenses.css";
import color1 from '../../assets/color1.png'
import color2 from '../../assets/color2.png'
import color3 from '../../assets/color3.png'
import color4 from '../../assets/color4.png'
import color5 from '../../assets/color5.png'
import color6 from '../../assets/color6.png'
import color7 from '../../assets/color7.png'

const RegisterCustomLenses = ({
  id,
  totalPrice,
  increase,
  color,
  setColor,
  setIncrease,
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
        {id ? "Editar Lente Personalizado" : ""}
      </h2>

      <div className="form-grid">
        <div className="form-column">
          <div className="form-group">
      <div>
      <label className="form-label">Nivel de aumento (Dioptrías)</label>
        <input
          type="number"
          placeholder="Aumento"
          className="w-full mt-1 p-2 border rounded-lg bg-gray-50" step="0.01" min="-25.00" max = "20.00"
          value={increase}
          onChange={(e) => setIncrease(e.target.value)}
        />
      </div>
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

                      <div className="coloresdiv">
            <p>Color:</p>
              <img
                src={color1}
                alt="Amarillo"
                onClick={() => setColor("Amarillo")}
                className={color === "Amarillo" ? "color-selected" : ""}
              />
              <img
                src={color2}
                alt="Azul"
                onClick={() => setColor("Azul")}
                className={color === "Azul" ? "color-selected" : ""}
              />
              <img
                src={color3}
                alt="Gris"
                onClick={() => setColor("Gris")}
                className={color === "Gris" ? "color-selected" : ""}
              />
              <img
                src={color4}
                alt="Rojo"
                onClick={() => setColor("Rojo")}
                className={color === "Rojo" ? "color-selected" : ""}
              />
              <img
                src={color5}
                alt="Verde"
                onClick={() => setColor("Verde")}
                className={color === "Verde" ? "color-selected" : ""}
              />
              <img
                src={color6}
                alt="Marron"
                onClick={() => setColor("Marron")}
                className={color === "Marron" ? "color-selected" : ""}
              />
              <img
                src={color7}
                alt="Morado"
                onClick={() => setColor("Morado")}
                className={color === "Morado" ? "color-selected" : ""}
              />
            </div>

        </div>


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
                disabled
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
