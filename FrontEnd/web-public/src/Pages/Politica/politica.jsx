import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import Banner from "../../assets/Banner-politica.png";
import "./politica.css";
import Footer from "../../components/footer/footer";


const Politica = () =>{
    return(
        <>
        <Navbar/>
        <main>
            
            <div className="imgbanner">
                <img src={Banner} alt="" />
            </div>


<div className="todo">
            <div className="container">

            <div class="left-sidebar">
            <h1>Uso de la Información</h1>
            <ul class="menu">
                <li><a href="#inforecopilada">Información que Recopilamos</a></li>
                <li><a href="#uso">Uso de la Información</a></li>
                <li><a href="#datos">Protección de Datos</a></li>

                <li><a href="#cookies">Cookies y Tecnologías Similares</a></li>


            </ul>

        </div>
        
        <div class="main-content">
            <h2 id="inforecopilada" >Información que recopilamos:</h2>
            <ul className="info-list"><li><strong>Optilux recopila solamente información necesaria poder llevar a cabo el mejor servicio posible para nuestros clientes. 
                Entre ellas requerimos de su nombre, correo electrónico, dirección, número de teléfono y contraseña.</strong></li>
                </ul>
            
           <br />
           <br />
           
            <h2 id="uso">Utilizamos su información para:</h2>
            <ul class="info-list">
                <li><strong>Procesar y gestionar pedidos, pagos y envíos de productos.</strong></li>
                <li><strong>Mejorar su experiencia en nuestro sitio web mediante personalización y optimización del contenido.</strong></li>
                <li><strong>Enviar actualizaciones, promociones y comunicaciones relacionadas con OptLux, siempre con su consentimiento.</strong></li>
                <li><strong>Responder a consultas y brindar soporte al cliente.</strong></li>
                <li><strong>Cumplir con obligaciones legales y prevenir fraudes, actividades sospechosas o el mal uso de nuestra plataforma.</strong></li>
            </ul>

            <br />
            <br />

            <h2 id="datos">Protección de datos:</h2>
            <ul className="info-list">
                <li><strong>Optilux recopila la información de sus usuarios y es completamente privada y confidencial.</strong></li>
                <li><strong>Optilux utiliza la información personal solo y exclusivamente para uso comercial y no 
                    comparte la información de sus clientes con medios de terceros.</strong></li>
                <li><strong>Optilux encripta la contraseña de sus usuarios para no comprometer su seguridad con el personal técnico.</strong></li>
            </ul>

            <br />
            <br />

            <h2 id="cookies">Uso de Cookies:</h2>
            <ul className="info-list">
                <li><strong>Optilux utiliza las cookies para guardar su información de inicio de sesión, esta expira cada 30 días.
Pasados los 30 días se volverá a pedir la información para el inicio de sesión, usted puede reiniciar esta cookie cerrando sesión en la página web.
</strong></li>
            </ul>




        </div>


            </div>

</div>
        </main>
        <Footer/>
        </>
    )
}

export default Politica