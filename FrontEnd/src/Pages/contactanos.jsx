import React from "react";
import '../css/contactanos.css'

const Contanctanos = () =>{

    return(
        <>
    <main>
    <div className="containerimg">
        <img src="https://us.123rf.com/450wm/socialmediajunkie/socialmediajunkie1206/socialmediajunkie120600014/14249313-azul-claro-papel-de-construcci%C3%B3n.jpg" alt="azul" />
    </div>
    <div className="ContenedorPadre">
        <section class="info">
            <div className="text">
                <h2>Estamos siempre listos para <br />ayudarte y responder tus <br />preguntas</h2><br />
            </div>
            <div class="detallesInfo">
                <div class="contacto">
                    <h3>Centro de Atención</h3><br />
                    <address>
                        <p><a href="tel:+5032224-1932">+503 2224-1932</a> 🇸🇻</p>
                        <p><a href="tel:+12125551234">+1 212 555 1234</a> 🇺🇸</p>
                    </address>
                </div>

                <div class="contacto">
                    <h3>Nuestra ubicación</h3> <br />
                        <address>
                        <p>Calle Col. Lomas de San Francisco...</p>
                        <p>Municipio San Salvador</p>
                        <p>San Salvador</p>
                        </address>
                </div>

                <div class="contacto">
                    <h3>Correo electrónico</h3><br />
                    <p><a href="mailto:optiluxhelp@gmail.com">optiluxhelp@gmail.com</a>📧</p>
                </div>

                <div class="contacto">
                    <h3>Redes sociales</h3><br />
                    <ul>
                        <li><a href="#">Facebook</a> 👤 Optilux El Salvador</li>
                        <li><a href="#">Instagram</a> 📸 Optiluxsv</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="preguntanos">
            <div>
            <h2>Pregúntanos</h2><br/><br />
            <p className="comunicate">Comunícate si tienes alguna duda o necesitas información. Estamos listos para responder tus preguntas.</p>
            </div>
            <form>
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" hint ="nombre"/>
                </div>
            <div>
                <label for="correo">Correo Electrónico:</label>
                <input type="email" id="correo" name="correo"/>
                </div>
            <div>
                <label for="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono"/>
                </div>
            <div>
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje"></textarea>
                </div>
            <button type="submit">Enviar correo</button>
            </form>
        </section>
    </div>
    </main>
        </>
    );
};

export default Contanctanos;