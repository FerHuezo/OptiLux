import "./pPersonalizados.css";
import React from "react";
import useDataCustomLenses from "../../components/pPersonalizable/hooks/useDataCustomLenses";
import RegisterCustomLenses from "../../components/pPersonalizable/registerCustomLenses";
import { Toaster } from "react-hot-toast";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
const ProductoCustomLenses = () => {
  const {
    activeTab,
    setActiveTab,
    color,
    setColor,
    id,
    price,
    totalPrice,
    setPrice,
    increase,
    setIncrease,
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
            <h1 className="titulo-principal">Creación de lentes personalizados</h1>

            <div className="contenido-tab">
                <RegisterCustomLenses
                  id={id}
                  color={color}
                  setColor={setColor}
                  price={price}
                  setPrice={setPrice}
                  totalPrice={totalPrice}
                  increase={increase}
                  setIncrease={setIncrease}
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
            </div>
          </div>
          <Toaster toastOptions={{ duration: 1500 }} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductoCustomLenses;
