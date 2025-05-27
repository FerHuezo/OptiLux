import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import './productoFiltro.css';
import ListFiltro from "../../components/productosFiltros/listProductsFiltro";
import RegisterFiltro from "../../components/productosFiltros/registerProductFiltro";
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
      <SideBar />
      <div className="contenedor-padre">
        <div className="productos-container">
          <div className="main-box">
            <div className="category-selector">
            <CategorySelector
              options={[
                { value: 'aumento', label: 'Aumento' },
                { value: 'filtros', label: 'Filtros' },
                { value: 'aros', label: 'Aros' },
                { value: 'terminales', label: 'Terminales' },
              ]}
            />
            </div>
            <h1 className="titulo-principal">Gestión de Filtros</h1>

            <div className="tab-buttons">
                <div className="tab-container">
              <button
                className={activeTab === 'list' ? 'tab-button active' : 'tab-button'}
                onClick={() => setActiveTab("list")}
              >
                Lista de Lentes
              </button>
              <button
                className={activeTab === 'form' ? 'tab-button active' : 'tab-button'}
                onClick={() => {
                  setActiveTab("form");
                  cleanData();
                }}
              >
                Gestionar Lentes
              </button>
              </div>
            </div>

            <div className="contenido-tab">
              {activeTab === "list" && (
                <ListFiltro
                  setId={setId}
                  setActiveTab={setActiveTab}
                  update={update}
                  handleEdit={handleEdit}
                  deleteFilterLenses={deleteFilterLenses}
                  filterLens={filterLens}
                  loading={loading}
                />
              )}
              {activeTab === "form" && (
                <RegisterFiltro
                  id={id}
                  setId={setId}
                  price={price}
                  setPrice={setPrice}
                  typeFilter={typeFilter}
                  setTypeFilter={setTypeFilter}
                  saveFilterLenses={saveFilterLenses}
                  handleEdit={handleEdit}
                  loading={loading}
                  setLoading={setLoading}
                  filterLens={filterLens}
                  setFilterLens={setFilterLens}
                  cleanData={cleanData}
                />
              )}
            </div>
          </div>
          <Toaster toastOptions={{ duration: 1500 }} />
        </div>
      </div>
    </>
    );
}
export default ProductoFiltro;