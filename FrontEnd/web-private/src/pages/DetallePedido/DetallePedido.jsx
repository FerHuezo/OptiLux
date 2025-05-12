import { useNavigate } from "react-router-dom";
import { MapPin, Mail, Phone, User, ArrowLeft } from "lucide-react";
import SideBar from '../../components/SideBar/SideBar'

const pedido = {
  cliente: "Rodrigo Córdova",
  direccion: "159, azimpur road (1st floor), lalbagh, l21",
  correo: "Rodrigo123_4@gmail.com",
  telefono: "7836-0934",
  productos: [
    { nombre: "Lentes Gucci x 1", precio: 180.0 },
    { nombre: "Filtro UV x 1", precio: 18.99 },
  ],
  envio: 10.0,
};

export default function DetallePedido() {
  const navigate = useNavigate();
  const total = pedido.productos.reduce((acc, p) => acc + p.precio, 0) + pedido.envio;

  return (
    <>
    <SideBar/>
    <div className="flex flex-col w-full p-12 bg-white text-gray-800">
      <button onClick={() => navigate(-1)} className="flex items-center text-lg mb-4 text-gray-600 hover:text-black">
        <ArrowLeft size={22} className="mr-2" />
        Regresar
      </button>

      <div className="bg-[#b7c6c9] p-10 rounded-xl shadow-md w-full max-w-5xl text-base">
        <div className="flex items-center gap-3 mb-4">
          <User size={20} />
          <span><strong>Cliente:</strong> {pedido.cliente}</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <MapPin size={20} />
          <span><strong>Dirección:</strong> {pedido.direccion}</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <Mail size={20} />
          <span><strong>Correo:</strong> {pedido.correo}</span>
        </div>
        <div className="flex items-center gap-3 mb-8">
          <Phone size={20} />
          <span><strong>Teléfono:</strong> {pedido.telefono}</span>
        </div>

        {/* Detalle de productos */}
        <div className="bg-[#93a9ac] p-6 rounded-lg w-full">
          {pedido.productos.map((p, index) => (
            <div key={index} className="flex justify-between mb-4 text-lg">
              <span>{p.nombre}</span>
              <span>${p.precio.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mt-6 text-lg font-semibold">
            <span>Envío</span>
            <span>${pedido.envio.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2 text-lg font-bold">
            <span>Total a pagar</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
