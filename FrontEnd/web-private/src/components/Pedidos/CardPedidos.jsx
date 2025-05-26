import React from "react";
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const CardPedidos = ({ pedido }) => {
  const { idClient } = pedido;

  return (
    <div className="bg-[#C3D3D5] p-4 rounded-lg shadow mb-4">
      <div className="flex flex-col gap-2 text-sm">
        <p><FaUser className="inline mr-2" /> Cliente: {idClient?.name}</p>
        <p><FaMapMarkerAlt className="inline mr-2" /> Dirección: {idClient?.address}</p>
        <p><FaEnvelope className="inline mr-2" /> Correo: {idClient?.email}</p>
        <p><FaPhone className="inline mr-2" /> Teléfono: {idClient?.phone}</p>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition">
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default CardPedidos;
