import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/footer";
import "./pImportados.css";

import color1 from '../../assets/color1.png'
import color2 from '../../assets/color2.png'
import color3 from '../../assets/color3.png'
import color4 from '../../assets/color4.png'
import color5 from '../../assets/color5.png'
import color6 from '../../assets/color6.png'
import color7 from '../../assets/color7.png'

import ListProducts from '../../components/Products/List'

const Pimportados = () =>{

    const API = "http://localhost:4000/api/imported";
    //const [id, setId] = useState("");
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch(API);
        if (!response.ok) {
        throw new Error("Hubo un error al obtener las marcas");
        }
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return(
        <>
        <Navbar/>

        <div>
            <div className="bar">
                 <a href="/Productos/Importados"><strong>Importados</strong></a>
                 <a href="/Productos/Personalizados"><strong>Personalizar</strong></a>
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
                    <br />
                    <button >Filtrar</button>
            </div>

<div className="contenedorprod">
    <div>
        <ListProducts
            products={products}
        />
        </div>
    </div>
</div>
</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       <Footer/>
        </>
    )
}

export default Pimportados;