import React from "react";
import '../css/contactanos.css'
import banner from '../components/img/banner-optilux.png'
import Elsalvador from '../components/img/bandera-elsalvador.png'
import eeuu from '../components/img/bandera-eeuu.png'
import facebook from '../components/img/facebook.png'
import instagram from '../components/img/instagramImg.png'
import gmail from '../components/img/gmailIcon.png'
const Contactanos = () =>{

    return(
        <>
    <main>
    <div className="containerimg">
        <img src= {banner} alt="azul" />
    </div>
    <div className="ContenedorPadre">
        <section className="info">
            <div className="text">
                <h2>Estamos siempre listos para <br />ayudarte y responder tus <br />preguntas</h2><br />
            </div>
            <div class="detallesInfo">
                <div class="contacto">
                    <h3>Centro de Atención</h3><br />
                    <address>
                        <p><a className="Ndecoracion" href="tel:+5032224-1932">+503 2224-1932</a> <img className="iconos" src={Elsalvador} alt="El salvador" /></p><br />
                        <p><a className="Ndecoracion" href="tel:+12125551234">+1 212 555 1234</a> <img  className="iconos" src={eeuu} alt="Estados Unidos" /></p>
                    </address>
                </div>

                <div class="contacto">
                    <h3>Nuestra ubicación</h3>
                        <address>
                        <p>Calle Col. Lomas de San Francisco Cl N°1 No 3-B</p>
                        <p>Departamento: San Salvador</p>
                        <p>Municipio San Salvador</p>
                        <p>San Salvador</p>
                        </address>
                </div>

                <div class="contacto">
                    <h3>Correo electrónico</h3><br />
                    <p><a className="Ndecoracion" href="mailto:optilux@gmail.com">optilux@gmail.com</a> <img className="iconosR" src={gmail} alt="gmail" /></p>
                </div>

                <div class="contacto">
                    <h3>Redes sociales</h3><br />
                    
                        <p><a className="Ndecoracion" href="#"> <img className="iconosR" src={facebook} alt="facebook"/> Facebook</a> Optilux El Salvador</p><br />
                        <p><a className="Ndecoracion" href="#"> <img  className="iconosR" src={instagram} alt="instagram" /> Instagram</a> Optiluxsv</p>
                    
                </div>
            </div>
        </section>

        <section className="preguntanos">
  <div>
    <h2>Pregúntanos</h2>
    <p className="comunicate">Comunícate si tienes alguna duda o necesitas información. Estamos listos para responder tus preguntas.</p><br />
  </div>
  <form>
    <div className="input-group">
      <input type="text" name="nombre" id="nombre" required />
      <label htmlFor="nombre">Nombre</label>
    </div>
    <div className="input-group">
      <input type="email" name="correos" id="correos" required />
      <label htmlFor="correos">Correo Electrónico</label>        
    </div>
    <div className="input-group">
      <input type="tel" name="telefono" id="telefono" required />
      <label htmlFor="telefono">Teléfono</label>
    </div>
    <div className="input-group">
      <textarea name="mensaje" id="mensaje" rows="4" required></textarea>
      <label htmlFor="mensaje">Mensaje</label>
    </div>
    <button type="submit">✈️ Enviar correo</button>
  </form>
</section>
    </div>
    </main>
        </>
    );
};

export default Contactanos;