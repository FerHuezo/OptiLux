import React from "react";
import './productoAros.css';
import Sidebar from "../../components/SideBar/SideBar";
import CategorySelector from '../../components/ComboBox/ComboBox';

const ProductoAros = () =>{
    return(
    <>
                <Sidebar/>

                <div className="main">
            <h1>Añadir un nuevo producto</h1>

            <CategorySelector
                    placeholder="Aros"
                    options={[
                        { value: ' ', label: 'Lentes Importados' },
                        { value: 'filtros', label: 'Filtros' },
                        { value: 'aros', label: 'Aros' },
                        { value: 'terminales', label: 'Terminales' },
                    ]}
                />

            <br />
            <br />
                     <h1>Tipo de lente</h1>           
            <select name="combo" id="">
                <option value="value1">Lentes importados</option>
                <option value="value2">Lentes arreglados</option>
                <option value="value2">Lentes opcion</option>
            </select>

            <div id="container">
                <div id="contenedor2">
                    <div className="container-child">
                    <h2>Forma: </h2>
                        <select name="combo" id="">
                            <option value="value1">Cuadrado</option>
                            <option value="value2">Ovalado</option>
                            <option value="value2">circular</option>
                        </select>
                    </div>
                    <div className="container-child">
                    <h2>Precio:</h2>
                    <input type="number" id="precio" name="precio" placeholder="Precio" required/>
                    </div>
                </div>
            <div className="buttons">
                <div className="childButton">
                <button>Guardar</button>
                <button>Cancelar</button>
                </div>
            </div>

            </div>
               
        </div>
    </>
    );
    
}
export default ProductoAros;