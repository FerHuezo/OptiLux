import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Ventas from "../../assets/ventas.png"
import GraficaPedidos from "../../components/Stats/Grafico";
import Sidebar from "../../components/SideBar/SideBar";


const Menu = () => {


  return (
    <>
        <Sidebar />
        <h1>Bienvenido al menú de empleado</h1>
        <h2>Estadisticas de venta</h2>
      <GraficaPedidos/>   

    </>
  );
};

export default Menu;