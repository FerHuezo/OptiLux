import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useDataVenta from "../components/Ventas/hooks/useDataVenta";
import BlurText from "../components/BlurTitle"

const Venta = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { sales, loading, error } = useDataVenta(id);

  useEffect(() => {
    console.log("Estado de datos - loading:", loading);
    console.log("Estado de datos - error:", error);
    console.log("Datos de venta:", sales);
  }, [sales, loading, error]);

  if (loading) return <div className="text-center text-lg font-semibold mt-5 animate-pulse">Cargando...</div>;

  if (error || !sales) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl w-[90%] ml-100">
        <h2 className="text-2xl font-bold text-red-600">🚫 Venta no encontrada</h2>
        <p className="text-gray-600 mt-2">No pudimos encontrar la venta con el ID proporcionado.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mr-50"
        >
          ⬅ Volver
        </button>
      </div>
    );
  }
  
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  
  return (
    <div className="max-w-4xl w-[90%] mx-auto p-6 bg-white shadow-lg rounded-lg mt-5 mb-5 ml-100 min-h-screen">
      <BlurText
            text="Detalles de la Venta"
            delay={300}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl mt-4 mb-10"
          />  
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 transition transform hover:scale-105">
        <h2 className="text-xl font-semibold text-gray-800">Información de la Orden</h2>
        <p className="text-gray-700"><strong>Estado:</strong> {sales.status}</p>
        <p className="text-gray-700"><strong>Método de Pago:</strong> {sales.paymentMethod}</p>
        <p className="text-gray-700"><strong>Total Pagado:</strong> ${sales.amountPaid}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md transition transform hover:scale-105">
        <h2 className="text-xl font-semibold text-gray-800">📍 Ubicación de Entrega</h2>
        <MapContainer 
          center={[sales.address.latitude, sales.address.longitude]} 
          zoom={13} 
          className="h-64 w-full rounded-lg overflow-hidden mt-3"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[sales.address.latitude, sales.address.longitude]}>
            <Popup>Ubicación de entrega</Popup>
          </Marker>
        </MapContainer>
      </div>
      <button 
          onClick={() => navigate(-1)} 
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ml-10"
        >
          ⬅ Volver
        </button>
    </div>
  );
};

export default Venta;
