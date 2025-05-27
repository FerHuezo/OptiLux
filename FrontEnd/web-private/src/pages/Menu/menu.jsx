import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Ventas from "../../assets/ventas.png"
import GraficoActivos from "../../components/Stats/Grafico";
const Menu = () => {


  return (
    <>
      <SideBar />
      <div className="contenedor">
        <h1 className="text-2xl font-semibold mb-4">Bienvenido al menú de empleado</h1>
        <h2 className="text-xl font-medium mb-6">Estadisticas de venta</h2>


<GraficoActivos/>

        
      </div>
    </>
  );
};

export default Menu;