import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/NavBar/NavBar'
import Footer from '../../components/footer/footer'
import imgFirst from '../../assets/firstImage.svg'
import imgOferta from '../../assets/bannerPersonaliza.svg'
import lentesImportados from '../../assets/1.svg'
import lentesPersonalizados from '../../assets/2.svg'

const Home = () => {
  return (
    <>
      <Navbar />
      <br /> 
    <div className="flex flex-col items-center w-full bg-gray-100 mb-5">
      <div className="w-[90%] max-w-6xl my-8 rounded-2xl overflow-hidden shadow-lg">
        <div className="flex overflow-x-auto snap-x snap-mandatory">
          {[imgFirst, "/img2.jpg", "/img3.jpg"].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full flex-shrink-0 snap-center object-cover"
            />
          ))}
        </div>
      </div>
      <br/>
      <div className="w-[90%] max-w-6xl flex flex-col md:flex-row gap-4 mb8">
        <div className="md:w-1/2 w-full">
          <img
            src={imgOferta}
            alt="Left"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col gap-4 mt-5">
        <Link to="/Productos/Personalizados">
        <img
            src={lentesPersonalizados}
            alt="Top right"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </Link>
          <Link to="/Productos/Importados">
          <img
            src={lentesImportados}
            alt="Bottom right"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;