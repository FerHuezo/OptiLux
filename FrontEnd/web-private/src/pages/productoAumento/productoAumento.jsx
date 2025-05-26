import React from "react";
import './productoAumento.css';
import Sidebar from "../../components/SideBar/SideBar";
import CategorySelector from '../../components/ComboBox/ComboBox';

const ProductoAumento = () =>{
    return( 
  <>
    <Sidebar />

    <div className="main">
      <h1>Añadir un nuevo producto</h1>

      <CategorySelector
        placeholder="Aumento"
        options={[
          { value: ' ', label: 'Lentes Importados' },
          { value: 'filtros', label: 'Filtros' },
          { value: 'aros', label: 'Aros' },
          { value: 'terminales', label: 'Terminales' },
        ]}
      />

      <br />
      <h2>Tipo de lente</h2>
      <select className="selector">
        <option value="value1">Lentes importados</option>
        <option value="value2">Lentes arreglados</option>
        <option value="value3">Lentes opción</option>
      </select>

      <div id="container">
        <div id="contenedor2">
          <div className="container-child">
            <h3>Nivel:</h3>
            <select>
              <option value="value1">+1.5</option>
              <option value="value2">+2.0</option>
              <option value="value3">+3.0</option>
            </select>
          </div>

          <div className="container-child">
            <h3>Precio:</h3>
            <input type="number" id="precio" name="precio" placeholder="Precio" required />
          </div>
        </div>

        <div className="buttons">
          <div className="childButton">
            <button>Guardar</button>
            <button className="cancel">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </>
    );
   
}
export default ProductoAumento;