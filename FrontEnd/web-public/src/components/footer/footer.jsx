import React from "react";
import './footer.css';
import Lentes from "../../assets/logo-transparent-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      <div className="social-icons flex justify-center items-center gap-1">          
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="Facebook" /></a>
          <a href="#"><img src="https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png" alt="X" /></a>
          <a href="#"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" alt="Instagram" /></a>
        </div>
      </div>

      <div className="footer-main">
            <img
            src={Lentes}
            alt="Logo Icon"
            className="footer-logo"
            />

        <div className="footer-divider" />

        <div className="footer-text">
          <p>Gracias por visitar <strong>OptiLux</strong>. Nos comprometemos a darte el mejor servicio y una experiencia única.</p>
          <p>Vuelve a la <a href="/">página de inicio</a> para conocer nuestras ofertas y productos exclusivos.</p>
          <p>Ricaldone - San Salvador #3125 - Tel: +503 7233 2013 - <a href="mailto:Optilux_NHC@gmail.com">Optilux_NHC@gmail.com</a></p>
          <br />
          <p>&copy; 2025 OptiLux. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
