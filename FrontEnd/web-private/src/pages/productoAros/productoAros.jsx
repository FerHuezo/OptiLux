import React from "react";
import './productoAros.css';
import Sidebar from "../../components/SideBar/SideBar";
import CategorySelector from '../../components/ComboBox/ComboBox';
import useDataAro from "../../components/productosAro/hooks/useDataAro";
import ListProductAro from "../../components/productosAro/listProductAro";
import RegisterAro from "../../components/productosAro/registerProductAro";
import { Toaster } from "react-hot-toast";

const ProductoAros = () =>{
    
    const {
        activeTab,
        setActiveTab,
        id,
        setId,
        typeLens,
        setTypeLens,
        aroLens,
        setAroLens,
        price,
        setPrice,
        loading,
        setLoading,
        cleanData,
        saveRingLenses,
        fetchAros,
        deleteRingLenses,
        update,
        handleEdit,
    } = useDataAro();
    
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
          <h1 className="titulo-principal">Gestión de Aros</h1>

          <div className="tab-buttons">
              <div className="tab-container">
            <button
              className={activeTab === 'list' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab("list")}
            >
              Lista de Aros
            </button>
            <button
              className={activeTab === 'form' ? 'tab-button active' : 'tab-button'}
              onClick={() => {
                setActiveTab("form");
                cleanData();
              }}
            >
              Gestionar Aros
            </button>
            </div>
          </div>

          <div className="contenido-tab">
            {activeTab === "list" && (
              <ListProductAro
                setId={setId}
                setActiveTab={setActiveTab}
                update={update}
                handleEdit={handleEdit}
                deleteRingLenses={deleteRingLenses}
                typeLens={typeLens}
                loading={loading}
              />
            )}
            {activeTab === "form" && (
              <RegisterAro
                id={id}
                setId={setId}
                price={price}
                setPrice={setPrice}
                typeLens={typeLens}
                setTypeLens={setTypeLens}
                saveRingLenses={saveRingLenses}
                handleEdit={handleEdit}
                loading={loading}
                setLoading={setLoading}
                aroLens={aroLens}
                setAroLens={setAroLens}
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
export default ProductoAros;