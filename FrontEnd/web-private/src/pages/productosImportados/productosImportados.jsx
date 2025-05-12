import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import CategorySelector from "../../components/ComboBox/ComboBox";
import './productosimportados.css';

const ProductosImportados = () => {
    return (
        <>
            <Sidebar />
            <div className="main">
                <h1>Añadir un nuevo producto</h1>

                <CategorySelector
                    options={[
                        { value: 'aumento', label: 'Aumento' },
                        { value: 'filtros', label: 'Filtros' },
                        { value: 'aros', label: 'Aros' },
                        { value: 'terminales', label: 'Terminales' },
                    ]}
                />
        <br />
                <div id="container">
                    <div id="contenedor2">
                        <div className="container-child">
                            <h2>Color: </h2>
                            <select name="color">
                                <option value="rojo">Rojo</option>
                                <option value="verde">Verde</option>
                                <option value="azul">Azul</option>
                            </select>
                        </div>
                        <div className="container-child">
                            <h2>Marca: </h2>
                            <select name="marca">
                                <option value="1">Marca 1</option>
                                <option value="2">Marca 2</option>
                                <option value="3">Marca 3</option>
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
                            <input type="number" id="precio" name="precio" placeholder="Precio" required />
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
};

export default ProductosImportados;
