import React from "react";
import CardPedidos from "./CardPedidos";
import useDataPedidos from "./hooks/useDataPedidos";

const ListPedidos = () => {
  const { pedidos, isLoading } = useDataPedidos();

  return (
    <div className="p-6 flex-1 bg-white">
      <h1 className="text-2xl font-semibold mb-2 text-center">Bienvenido al menú de empleado</h1>
      <br />
      <h2 className="text-xl font-medium mb-4">Pedidos activos</h2>

      {isLoading ? (
  <p>Cargando pedidos...</p>
) : pedidos.length === 0 ? (
  <p className="text-center text-gray-500">No hay pedidos disponibles.</p> // ✅ Mensaje cuando no hay datos
) : (
  pedidos.map((pedido) => (
    <CardPedidos key={pedido._id} pedido={pedido} />
  ))
)}

    </div>
  );
};

export default ListPedidos;
