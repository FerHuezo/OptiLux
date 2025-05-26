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

                <div className="form-container">
                    <div className="form-section">
                        <div className="form-group">
                            <label>Color:</label>
                            <select name="color">
                                <option value="rojo">Rojo</option>
                                <option value="verde">Verde</option>
                                <option value="azul">Azul</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Marca:</label>
                            <select name="marca">
                                <option value="1">Marca 1</option>
                                <option value="2">Marca 2</option>
                                <option value="3">Marca 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Cantidad:</label>
                            <select name="cantidad">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Precio:</label>
                            <input type="number" name="precio" placeholder="Precio" required />
                        </div>
                    </div>

                    <div className="form-buttons">
                        <button>Guardar</button>
                        <button className="cancel">Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductosImportados;
