import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Venta = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Llamar a la API para obtener los detalles del pedido usando orderId
    fetch(`/api/orders/${orderId}`)
      .then(response => response.json())
      .then(data => setOrderDetails(data));
  }, [orderId]);

  if (!orderDetails) return <div>Cargando...</div>;

  return (
    <div className="venta-container">
      <h1>Detalles del Pedido</h1>
      <div className="order-info">
        <h2>Información del Pedido</h2>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="payment-method">
        <h3>Método de Pago: {orderDetails.paymentMethod}</h3>
        <p>Total: ${orderDetails.total}</p>
      </div>
      
      <div className="delivery-location">
        <h3>Ubicación de Entrega</h3>
        <MapContainer center={[orderDetails.latitude, orderDetails.longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[orderDetails.latitude, orderDetails.longitude]}>
            <Popup>
              Ubicación de entrega
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Venta;
