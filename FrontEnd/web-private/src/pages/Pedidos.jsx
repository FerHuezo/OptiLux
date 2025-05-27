import React from "react";
import { motion } from "framer-motion";
import ListPedidos from "../components/Pedidos/ListaPedidos";

const Pedidos = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-6xl p-10 mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Lista de Pedidos</h1>
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
          <ListPedidos />
        </div>
      </motion.div>
    </div>
  );
};

export default Pedidos;
