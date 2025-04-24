import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/footer';
import Lentes from '../../assets/lentesNautica.jpg';
import './Carrito.css';



const Carrito = () =>{

    return(
        <>
<Navbar />
<div className="container">
        <div className="cart">
            <div className="item">
                <img src={Lentes} alt="Lentes 9RX5"/>
                <div className="item-info">
                    <strong>Lentes modelo 9RX5</strong><br/>Personalizado
                </div>
                <div className="precio">$130.00</div>
                <div className="itemca">
                    <div className="control">
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                    </div>
                </div>
                <div className="total">$260.00</div>
                <div className="removerit">&times;</div>
            </div>
            <div className="item">
                <img src={Lentes} alt="Lentes X4RT"/>
                <div className="item-info">
                    <strong>Lentes nautica modelo X4RT</strong><br/>Importado
                </div>
                <div className="precio">$170.00</div>
                <div className="itemca">
                    <div className="control">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <div className="total">$170.00</div>
                <div className="removerit">&times;</div>
            </div>
            <div className="item">
                <img src={Lentes} alt="Lentes F8I9"/>
                <div className="item-info">
                    <strong>Lentes lacoste modelo F8I9</strong><br/>Importado
                </div>
                <div className="precio">$225.00</div>
                <div className="itemca">
                    <div className="control">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <div className="total">$225.00</div>
                <div className="removerit">&times;</div>
            </div>
        </div>

        <div className="carritopago">
            <h3>Total de carrito: <br/><strong>$965.00</strong></h3>
            <small>Envío y impuestos calculados en la factura</small>
            <div className="checkbox">
                <input type="checkbox" id="terms"/> Estoy de acuerdo con los <a href="#">Términos y Condiciones</a>
            </div>
            <div className="mapa">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.9105294133447!2d-86.81035652437836!3d33.52068217337086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891b940d9aab0f%3A0x38fcb0d0a98a0dc5!2sBirmingham%2C%20AL%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1713998372389!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            />

            </div>
            <textarea placeholder="Agrega una nota extra del pedido (Opcional)"></textarea>
            <button>Realizar Compra</button>
        </div>
    </div>

    <Footer />
        </>
    )
}
export default Carrito;