import React from "react";
import '../footer/footer.css'
import Lentes from "./img/lentes-de-contacto.png";

const Footer = () => {

    return(
        <>
        
        <footer>
        <div className="Container-P">
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="Facebook"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png" alt="X"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" alt="Instagram"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-circle-512.png" alt="Snapchat"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="Pinterest"/></a>
        </div>
        
        <div className="container">
            <div className="footer-info">
                <img src={Lentes} alt="Icono Lentes"/>
                <div className="contenedor-separadorA"> 
                    <div className="lineaSeparadora"></div>
                </div>
                <div className="info-secundaria">
                    <p>Muchas gracias por visitar nuestra tienda y tener la comodidad de preferinos, nos comprometemos a dar el mejor serivcio con nosotros <strong>¡OptiLux!</strong>.</p>
                    <p>¡Regresa a nuestra pagina de <a href="">Inicio</a> para poder ver los diferentes productos y descuentos!</p>
                    <br/>
                    <p>Ricaldone - El salvador, San Salvador #3125 - +503 7233 2013 -  <a href="">Optilux_NHC@gmail.com</a></p>
                    <p>&copy; 2025 Optilux</p>
                </div>
                
            </div>
               
        </div>
        </footer>
        </>

    );

};

export default Footer;