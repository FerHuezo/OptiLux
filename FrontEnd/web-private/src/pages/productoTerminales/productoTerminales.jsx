import React from "react";
import './productoTerminales.css';
import Sidebar from "../../components/SideBar/SideBar";
import CategorySelector from '../../components/ComboBox/ComboBox';
import { Toaster } from "react-hot-toast";
import useDataTerminal from "../../components/productosTerminales/hooks/useDataTerminal";
import ListProductTerminal from "../../components/productosTerminales/listProductTerminal";
import RegisterTerminal from "../../components/productosTerminales/registerProductTerminal";


const ProductoTerminales = () => {
    const {
        activeTab,
        image,
        setImage,
        setActiveTab,
        id,
        setId,
        typeTerminals,
        setTypeTerminals,
        terminalLensesA,
        setTerminalLensesA,
        price,
        setPrice,
        loading,
        setLoading,
        cleanData,
        saveTerminalLenses,
        fetchTerminales,
        deleteTerminalLenses,
        update,
        handleEdit
    } = useDataTerminal();

    return (
           <>
    <Sidebar />
    <div className="contenedor-padre">
      <div className="productos-container">
        <div className="main-box">
          <div className="category-selector">
          <CategorySelector
            options={[
              { value: ' ', label: 'Lentes Importados' },   
              { value: 'filtros', label: 'Filtros' },
              { value: 'aros', label: 'Aros' },
              { value: 'terminales', label: 'Terminales' },
            ]}
          />
          </div>
          <h1 className="titulo-principal">Gestión de Terminales</h1>

          <div className="tab-buttons">
              <div className="tab-container">
            <button
              className={activeTab === 'list' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab("list")}
            >
              Lista de Terminales
            </button>
            <button
              className={activeTab === 'form' ? 'tab-button active' : 'tab-button'}
              onClick={() => {
                setActiveTab("form");
                cleanData();
              }}
            >
              Gestionar Terminales
            </button>
            </div>
          </div>

          <div className="contenido-tab">
            {activeTab === "list" && (
              <ListProductTerminal
                setId={setId}
                setActiveTab={setActiveTab}
                update={update}
                handleEdit={handleEdit}
                deleteTerminalLenses={deleteTerminalLenses}
                terminalLensesA={terminalLensesA}
                loading={loading}
              />
            )}
            {activeTab === "form" && (
              <RegisterTerminal
                id={id}
                image={image}
                setImage={setImage}
                setId={setId}
                price={price}
                setPrice={setPrice}
                typeTerminals={typeTerminals}
                setTypeTerminals={setTypeTerminals}
                saveTerminalLenses={saveTerminalLenses}
                handleEdit={handleEdit}
                loading={loading}
                setLoading={setLoading}
                terminalLensesA={terminalLensesA}
                setTerminalLensesA={setTerminalLensesA}
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
export default ProductoTerminales;