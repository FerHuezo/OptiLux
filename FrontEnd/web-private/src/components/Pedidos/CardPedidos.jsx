import { MapPin, Mail, Phone, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PedidoCard = ({ pedido }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#b7c6c9] p-6 rounded-lg shadow-md text-sm">
      <div className="flex items-center gap-2 mb-2">
        <User size={18} />
        <span><strong>Cliente:</strong> {pedido.cliente}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={18} />
        <span><strong>Dirección:</strong> {pedido.direccion}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Mail size={18} />
        <span><strong>Correo:</strong> {pedido.correo}</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Phone size={18} />
        <span><strong>Teléfono:</strong> {pedido.telefono}</span>
      </div>
      <button
        onClick={() => navigate(`/pedidos/${pedido.id}`)}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Ver detalles
      </button>
    </div>
  );
};

export default PedidoCard;
