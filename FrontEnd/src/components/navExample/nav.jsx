import React from "react";
import '../navExample/Nav.css'

const Nav = () =>{

    return(
    <>
        <header>
            <nav class="navbar">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Servicios</a></li>
                    <li><a href="/contactanos">Contacto</a></li>
                </ul>
            </nav>
        </header>
    </>
    );

};

export default Nav;

