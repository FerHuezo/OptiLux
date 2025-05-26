import React from "react";

const RegisterImport = ({setColor, color, setPrice, price, setAmount, amount, setBrand, brand, saveImportLenses, id, handleEdit}) =>{

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
                            <select name="color" value={color} onChange={(e)=> setColor(e.target.value)}>
                                <option value="rojo">Rojo</option>
                                <option value="verde">Verde</option>
                                <option value="azul">Azul</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Marca:</label>
                            <select name="marca" value={brand} onChange={(e)=> setBrand(e.target.value)}>
                                <option value="1">Marca 1</option>
                                <option value="2">Marca 2</option>
                                <option value="3">Marca 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Cantidad:</label>
                            <select name="cantidad" value={amount} onChange={(e)=> setAmount(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Precio:</label>
                            <input type="number" name="precio" placeholder="Precio" required value={price} onChange={(e)=> setPrice(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-buttons">
                {(!id) ?           <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={(e) => {
                saveImportLenses(e);
                }}
            >
                Guardar
            </button> :          
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={(e) => {
                handleEdit(e);
                }}
            >
                Editar
            </button>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterImport;