import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Ventas from "../../assets/ventas.png"
const Menu = () => {


  return (
    <>
      <div className="contenedor">
        <h1 className="text-2xl font-semibold mb-4">Bienvenido al menú de empleado</h1>
        <h2 className="text-xl font-medium mb-6">Estadisticas de venta</h2>


<img src={Ventas} alt="" />

        
      </div>
    </>
  );
};

export default Menu;