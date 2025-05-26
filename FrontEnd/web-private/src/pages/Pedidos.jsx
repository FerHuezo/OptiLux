import React from "react";
import Sidebar from "../components/SideBar/Sidebar"; // Ajusta si tu ruta es distinta
import ListPedidos from "../components/Pedidos/ListaPedidos";

const Pedidos = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ListPedidos />
    </div>
  );
};

export default Pedidos;