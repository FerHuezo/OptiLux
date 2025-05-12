import { useNavigate } from "react-router-dom";
import { MapPin, Mail, Phone, User } from "lucide-react";
import SideBar from '../../components/SideBar/SideBar'

const pedidos = [
  {
    id: 1,
    cliente: "Rodrigo Córdova",
    direccion: "159, azimpur road (1st floor), lalbagh, l21",
    correo: "Rodrigo123_4@gmail.com",
    telefono: "7836-0934"
  },
  {
    id: 2,
    cliente: "Ana Pérez",
    direccion: "Av. Central 45, Edif. Delta, oficina 3B",
    correo: "ana.perez@mail.com",
    telefono: "7685-2211"
  }
];

const PedidosActivos= () => {
  const navigate = useNavigate();

  return (
    <>
    <SideBar/>
    <div className="flex flex-col w-full p-8 bg-white text-gray-800">
      <h1 className="text-2xl font-semibold mb-4">Bienvenido al menú de empleado</h1>
      <h2 className="text-xl font-medium mb-6">Pedidos activos</h2>

      <div className="flex flex-col gap-6">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="bg-[#b7c6c9] p-6 rounded-lg shadow-md text-sm">
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
        ))}
      </div>
    </div>
    </>
  );
}
export default PedidosActivos;