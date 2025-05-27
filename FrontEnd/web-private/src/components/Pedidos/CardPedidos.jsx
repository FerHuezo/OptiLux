import React from "react";
import { FaUser, FaPhoneAlt, FaEnvelopeOpenText, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const CardPedidos = ({ pedido }) => {
  const { idClient } = pedido;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-r from-indigo-200 to-indigo-300 p-4 rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transform hover:scale-105 transition-all w-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <FaUser className="text-blue-600" />
          <span className="font-semibold">Cliente:</span> {idClient.firstName} {idClient.lastName}
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-red-600" />
          <span className="font-semibold">Teléfono:</span> {idClient.telephone}
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelopeOpenText className="text-green-600" />
          <span className="font-semibold">Correo:</span> {idClient.email}
        </div>
        <div className="flex items-center gap-2">
          {idClient.isVerified ? (
            <FaCheckCircle className="text-green-600" />
          ) : (
            <FaTimesCircle className="text-gray-600" />
          )}
          <span className="font-semibold">
            {idClient.isVerified ? "✅ Verificado" : "❌ No verificado"}
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Ver detalles
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardPedidos;
