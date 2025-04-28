import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/footer";
import "./pImportados.css";
import CardP from "../../components/cardProd/cardP"
import color1 from '../../assets/color1.png'
import color2 from '../../assets/color2.png'
import color3 from '../../assets/color3.png'
import color4 from '../../assets/color4.png'
import color5 from '../../assets/color5.png'
import color6 from '../../assets/color6.png'
import color7 from '../../assets/color7.png'

import lentes1 from '../../assets/lentes1.png'
import lentes2 from '../../assets/lentes2.png'
import lentes3 from '../../assets/lentes3.png'
import lentes4 from '../../assets/lentes4.png'
import lentes5 from '../../assets/lentes5.png'
import lentes6 from '../../assets/lentes6.png'





const Pimportados = () =>{
    return(
        <>


        <Navbar/>

        <div>
            <div className="bar">
                 <a href="#"><strong>Importados</strong></a>
                 <a href="#"><strong>Personalizar</strong></a>
            </div>

        <div className="contenedor">
            <div className="cuadrado">
                    <h2>Categorias</h2>
                    <ul>
                        <li>Ovalados</li>
                        <li>Redondos</li>
                        <li>Aviadores</li>
                        <li>Agatados</li>
                    </ul>

                    <h2>Filtrar por</h2>
                    <p>Color:</p>
                    <div className="coloresdiv">
                    <img src={color1}/>
                    <img src={color2}/>
                    <img src={color3}/>
                    <img src={color4}/>
                    <img src={color5}/>
                    <img src={color6}/>
                    <img src={color7}/>
                        </div>
                        <br />
         


                    <p>Rango de precio</p>
                    <input type="range" id="rango"  min="0" max="100" />
                    <div id="rangopequeño">
                    <p>$0</p><p>$2500</p></div>
            </div>



<div className="contenedorprod">
            <div className="cardsjunta1">
            <CardP img={lentes1}
                nombre={"Lentes lacoste L2912"}
                precio={"$180.00"}
            />

<CardP img={lentes2}
                nombre={"Lentes nautica M1893"}
                precio={"$225.00"}
            />

<CardP img={lentes3}
                nombre={"Lentes nautica M1893"}
                precio={"$315.00"}
            />
            </div>
            <div className="cardsjunta2">

<CardP img={lentes4}
                nombre={"Lentes lacoste L2912"}
                precio={"$170.00"}
            />

<CardP img={lentes5}
                nombre={"Lentes rayban R5732"}
                precio={"$400.00"}
            />

<CardP img={lentes6}
                nombre={"Lentes guess G9481"}
                precio={"$195.00"}
            />
           
            </div></div>
        </div>
       
       </div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       <Footer/>

       
        </>
    )
}

export default Pimportados;