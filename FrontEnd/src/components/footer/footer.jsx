import React from "react";
import '../footer/footer.css'

const Footer = () => {

    return(
        <>
        <footer>
        <div class="container">
            <div class="footer-info">
                <h3 id="contactanos">Contacto</h3>
                <p>OptiLux</p>
                <p>Ricaldone, El salvador, San Salvador</p>
                <p>Email: Optilux_NHC@gmail.com</p>
                <p>Teléfono: +503 7233 2013</p>
            </div>
    
            <div class="footer-Optilux">
                <h3>Síguenos</h3>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png" alt="Facebook"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://t.ctcdn.com.br/b2gehl3ZRAKUVpehWpv4ZR-yBvE=/i489929.jpeg" alt="Twitter"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram"/></a>
            </div>
        </div>
        </footer>
        </>

    );

};

export default Footer;