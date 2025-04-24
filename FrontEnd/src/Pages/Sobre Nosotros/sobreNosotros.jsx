import React from 'react';
import banner from '../../assets/bannerSobreNosotros.png'
import Navbar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/footer';
import "./sobreNosotros.css"
const SobreNosotros = () =>{
    return(

        <>
            <Navbar/>
                <main>
                    <div className="containerBanner">
                    <img src={banner} alt="banner" />
                    </div>

                    <section class="sobre-nosotros">
                        <div class="contenido">
                            <p><strong>Sobre nosotros</strong></p>
                            <h1> <strong>Lujo para tus ojos, <br /> comfort para tu vista</strong> ✨</h1>
                            <p>Gracias por elegir OptiLux. Su apoyo nos inspira a seguir <br />ofreciendo lentes de lujo con elegancia y exclusividad. <br /> ¡Seguiremos brindándoles lo mejor!</p>
                        </div>
                        <div class="estadisticas">
                            <div class="stat">
                                <h2><strong>10,000+</strong></h2>
                                <p>Usuarios activos</p>
                            </div>
                            <div class="stat">
                                <h2><strong>20+</strong></h2>
                                <p>Marcas de calidad</p>
                            </div>
                            <div class="stat">
                                <h2><strong>10</strong></h2>
                                <p>Sucursales vigentes</p>
                            </div>
                            <div class="stat">
                                <h2><strong>100+</strong></h2>
                                <p>Personalizaciones a tus lentes</p>
                            </div>
                        </div>
                    </section>
                </main> 
            <Footer/>
        </>
    )
}

export default SobreNosotros;