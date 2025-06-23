import React from "react";
import './productoAumento.css';
import Sidebar from "../../components/SideBar/SideBar";
import CategorySelector from '../../components/ComboBox/ComboBox';
import useDataAumento from "../../components/productosAumento/hooks/useDataAumento";
import ListProduct from "../../components/productosAumento/listProductsAumento";
import RegisterAumento from "../../components/productosAumento/registerProductAumento";
import {Toaster} from 'react-hot-toast';

const ProductoAumento = () =>{

    const{
      activeTab,
      setActiveTab,
      id,
      setId,
      increaseLens,
      setIncreaseLens,
      increaseLevel,
      setIncreaseLevel,
      price,
      setPrice,
      loading,
      setLoading,
      cleanData,
      saveIncreaseLenses,
      fetchAumento,
      deleteIncreaseLenses,
      update,
      handleEdit,
    } =useDataAumento(); 

    return( 
      <>
      <Sidebar />
      <div className="contenedor-padre">
        <div className="productos-container">
          <div className="main-box">
            <div className="category-selector">
            <CategorySelector
              options={[
                { value: ' ', label: 'Lentes Importados' },   
                { value: 'aumento', label: 'Aumento' },
                { value: 'aros', label: 'Aros' },
                { value: 'terminales', label: 'Terminales' },
              ]}
            />
            </div>
            <h1 className="titulo-principal">Gestión nivel Aumento</h1>

            <div className="tab-buttons">
                <div className="tab-container">
              <button
                className={activeTab === 'list' ? 'tab-button active' : 'tab-button'}
                onClick={() => setActiveTab("list")}
              >
                Lista de aumentos
              </button>
              <button
                className={activeTab === 'form' ? 'tab-button active' : 'tab-button'}
                onClick={() => {
                  setActiveTab("form");
                  cleanData();
                }}
              >
                Gestionar Aumentos
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
                  deleteIncreaseLenses={deleteIncreaseLenses}
                  increaseLens={increaseLens}
                  loading={loading}
                />
              )}
              {activeTab === "form" && (
                <RegisterAumento
                  id={id}
                  setId={setId}
                  price={price}
                  setPrice={setPrice}
                  increaseLevel={increaseLevel}
                  setIncreaseLevel={setIncreaseLevel}
                  saveIncreaseLenses={saveIncreaseLenses}
                  handleEdit={handleEdit}
                  loading={loading}
                  setLoading={setLoading}
                  increaseLens={increaseLens}
                  setIncreaseLens={setIncreaseLens}
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
export default ProductoAumento;