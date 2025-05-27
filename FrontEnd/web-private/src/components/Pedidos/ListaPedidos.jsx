import React from "react";
import CardPedidos from "./CardPedidos";
import useDataPedidos from "./hooks/useDataPedidos";
import { motion } from "framer-motion";

const SkeletonCard = () => (
  <motion.div
    className="bg-gray-300 animate-pulse p-6 rounded-xl shadow-lg border border-gray-400 h-[200px] w-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  />
);

const ListPedidos = () => {
  const { pedidos, isLoading } = useDataPedidos();

  return (
    <div className="flex flex-col justify-start w-full overflow-hidden">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Bienvenido al menú de empleado</h1>
      <h2 className="text-xl font-medium mb-4 text-gray-700">Pedidos activos</h2>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {[...Array(4)].map((_, index) => <SkeletonCard key={index} />)}
        </div>
      ) : pedidos.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-4">No hay pedidos disponibles.</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {pedidos.map((pedido) => (
            <CardPedidos key={pedido._id} pedido={pedido} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ListPedidos;
