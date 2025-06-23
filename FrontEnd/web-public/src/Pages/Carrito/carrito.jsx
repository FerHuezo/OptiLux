import React, { useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/footer";
import Lentes from "../../assets/lentesNautica.jpg";
import { useCart } from '../../context/useCart';
import './Carrito.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import toast from "react-hot-toast";

const MapSelector = ({ onSelect }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
};

const Carrito = () => {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [note, setNote] = useState("");
  const [location, setLocation] = useState(null);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) return toast.error("Inicia sesión para continuar");
    if (!termsAccepted) return toast.error("Debes aceptar los términos");
    if (!location) return toast.error("Selecciona una ubicación en el mapa");
    if (cartItems.length === 0) return toast.error("El carrito está vacío");

    const order = {
      idClient: userId,
      products: cartItems.map((item) => ({
        idProduct: item._id,
        productType: "importLenses",
        quantity: item.quantity,
      })),
      total: cartTotal,
      status: "pendiente",
      location,
      note,
    };

    try {
      const res = await fetch("http://localhost:4000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order),
      });

      if (!res.ok) throw new Error("Error al crear el pedido");

      toast.success("Pedido realizado con éxito");
    } catch (err) {
      toast.error("Hubo un error al procesar tu pedido");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="cart">
          {cartItems.length === 0 ? (
            <p className="text-center w-full text-gray-500">Tu carrito está vacío 🛒</p>
          ) : (
            cartItems.map((item) => (
              <div className="item" key={item._id}>
                <img src={item.img || Lentes} alt={`Lente ${item.brand}`} />
                <div className="item-info">
                  <strong>{item.brand}</strong><br />
                  {item.increaseLenses}
                </div>
                <div className="precio">${item.price.toFixed(2)}</div>
                <div className="itemca">
                  <div className="control">
                    <button onClick={() => decrementQuantity(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item._id)}>+</button>
                  </div>
                </div>
                <div className="total">${(item.price * item.quantity).toFixed(2)}</div>
                <div
                  className="removerit"
                  onClick={() => removeFromCart(item._id)}
                  style={{ cursor: "pointer" }}
                >
                  &times;
                </div>
              </div>
            ))
          )}
        </div>

        <div className="carritopago">
          <h3>Total de carrito: <br /><strong>${cartTotal.toFixed(2)}</strong></h3>
          <small>Envío y impuestos calculados en la factura</small>

          <div className="checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            /> Estoy de acuerdo con los <a href="#">Términos y Condiciones</a>
          </div>
          
            <hr />
            <h4>Selecciona la ubicación de envío 📍</h4>

          <div className="mapa">
            <MapContainer
              center={[13.6929, -89.2182]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <MapSelector onSelect={(coords) => setLocation(coords)} />
            </MapContainer>
          </div>

          <textarea
            placeholder="Agrega una nota extra del pedido (Opcional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button onClick={handleSubmit}>Realizar Compra</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;