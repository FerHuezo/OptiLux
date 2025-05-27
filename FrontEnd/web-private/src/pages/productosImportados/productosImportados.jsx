import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import CategorySelector from "../../components/ComboBox/ComboBox";
import './productosimportados.css';
import useDataImport from "../../components/productosImportados/hooks/useDataImport";
import RegisterImport from "../../components/productosImportados/registerProductsImport";
import ListProduct from "../../components/productosImportados/listProductsImport";
import {Toaster} from 'react-hot-toast';

const ProductosImportados = () => {
    
    
    const { 
        activeTab,
        setActiveTab,
        id,
        setId,
        color,
        setColor,
        price,
        setPrice,
        amount,
        setAmount,
        brand,
        setBrand,
        importLens,
        setImportLens,
        loading,
        setLoading,
        fetchImportLens,
        saveImportLenses,
        deleteImportLenses,
        update,
        increaseLenses,
        setIncreaseLenses,
        handleEdit,
        cleanData,  
    } = useDataImport();

      return (
            <>
      <Sidebar />
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
            <h1 className="titulo-principal">Gestión de Lentes Importados</h1>

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
                <ListProduct
                  setId={setId}
                  setActiveTab={setActiveTab}
                  update={update}
                  handleEdit={handleEdit}
                  deleteImportLenses={deleteImportLenses}
                  importLens={importLens}
                  loading={loading}
                />
              )}
              {activeTab === "form" && (
                <RegisterImport
                  id={id}
                  setId={setId}
                  color={color}
                  setColor={setColor}
                  increaseLenses={increaseLenses}
                  setIncreaseLenses={setIncreaseLenses}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  brand={brand}
                  setBrand={setBrand}
                  saveImportLenses={saveImportLenses}
                  handleEdit={handleEdit}
                  loading={loading}
                  setLoading={setLoading}
                  importLens={importLens}
                  setImportLens={setImportLens}
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
};

export default ProductosImportados;
