import "./pPersonalizados.css";
import React from "react";
import useDataCustomLenses from "../../components/pPersonalizable/hooks/useDataCustomLenses";
import RegisterCustomLenses from "../../components/pPersonalizable/registerCustomLenses";
import { Toaster } from "react-hot-toast";
import Navbar from "../../components/NavBar/NavBar";
const ProductoCustomLenses = () => {
  const {
    activeTab,
    setActiveTab,
    id,
    price,
    totalPrice,
    setPrice,
    increase,
    filter,
    ring,
    terminals,
    increseSelected,
    setIncreaseSelected,
    filterSelected,
    setFilterSelected,
    ringSelected,
    setRingSelected,
    terminalsSelected,
    setTerminalsSelected,
    saveCustomLenses,
    handleEdit,
    setId,
  } = useDataCustomLenses();

  return (
    <>
        <Navbar />
      <div className="contenedor-padre">
        <div className="productos-container">
          <div className="main-box">
            <h1 className="titulo-principal">Gestión de Lentes Personalizados</h1>

            <div className="tab-buttons">
              <div className="tab-container">
                <button
                  className={activeTab === "form" ? "tab-button active" : "tab-button"}
                  onClick={() => {
                    setActiveTab("form");
                    setId("");
                  }}
                >
                  Crear Lentes Personalizado
                </button>
              </div>
            </div>

            <div className="contenido-tab">
              {activeTab === "form" && (
                <RegisterCustomLenses
                  id={id}
                  price={price}
                  setPrice={setPrice}
                  totalPrice={totalPrice}
                  increase={increase}
                  increseSelected={increseSelected}
                  setIncreaseSelected={setIncreaseSelected}
                  filter={filter}
                  filterSelected={filterSelected}
                  setFilterSelected={setFilterSelected}
                  ring={ring}
                  ringSelected={ringSelected}
                  setRingSelected={setRingSelected}
                  terminals={terminals}
                  terminalsSelected={terminalsSelected}
                  setTerminalsSelected={setTerminalsSelected}
                  saveCustomLenses={saveCustomLenses}
                  handleEdit={handleEdit}
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

export default ProductoCustomLenses;
