import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import './productoFiltro.css';
import useDataFiltro from "../../components/productosFiltros/hooks/useDataFiltro";
import CategorySelector from '../../components/ComboBox/ComboBox';

import {Toaster} from 'react-hot-toast';



const ProductoFiltro = () =>{
    
    const {
        activeTab,
        setActiveTab,
        id,
        setId,
        typeFilter,
        setTypeFilter,
        price,
        setPrice,
        filterLens,
        setFilterLens,
        loading,
        setLoading,
        fetchFiltro,
        saveFilterLenses,
        deleteFilterLenses,
        update,
        handleEdit,
        cleanData,
    } = useDataFiltro();

    return( 
    <>
        <SideBar/>
                <div className="main">
            <h1>Añadir un nuevo producto</h1>
            <CategorySelector
                    placeholder="Filtros"
                    options={[
                        { value: ' ', label: 'Lentes Importados' },
                        { value: 'aros', label: 'Aros' },
                        { value: 'terminales', label: 'Terminales' },
                        { value: 'aumento', label: 'Aumento' },
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
                    <h2>Nombre: </h2>
                        <select name="combo" id="">
                            <option value="value1">UV</option>
                            <option value="value2">Azul</option>
                            <option value="value2">Amarillo</option>
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
export default ProductoFiltro;