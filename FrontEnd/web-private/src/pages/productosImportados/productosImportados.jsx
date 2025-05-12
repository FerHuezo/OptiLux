import React from "react";
import './productosimportados.css';

const ProductosImportados = () => {
    return (
        <>

        <div className="main">
            <h1>Añadir un nuevo producto</h1>

            <select name="combo" id="">
                <option value="value1">Lentes importados</option>
                <option value="value2">Aumento</option>
                <option value="value3">Filtros</option>
                <option value="value4">Aros</option>
                <option value="value5">Terminales</option>
            </select>

            <div id="container">
                <div id="contenedor2">
                    <div className="container-child">
                    <h2>Color: </h2>
                        <select name="combo" id="">
                            <option value="value1">Rojo</option>
                            <option value="value2">Verde</option>
                            <option value="value2">Azul</option>
                        </select>
                    </div>
                    <div className="container-child">
                        <h2>Marca: </h2>
                        <select name="combo" id="">
                            <option value="value1">Marca 1</option>
                            <option value="value2">Marca 2</option>
                            <option value="value2">Marca 3</option>
                        </select>
                    </div>
                    <div className="container-child"> 
                        <h2>Cantidad:</h2>
                        <select id="numero" name="numero">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="container-child">
                    <h2>Precio:</h2>
                    <input type="text" id="precio" name="precio" placeholder="Precio" required/>
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

export default ProductosImportados;