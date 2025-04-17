import React from 'react';
import Navbar from '../components/NavBar/NavBar'
import Footer from '../components/footer/footer'
import imgFirst from '../assets/firstImage.svg'
import imgOferta from '../assets/bannerPersonaliza.svg'
import lentesImportados from '../assets/1.svg'
import lentesPersonalizados from '../assets/2.svg'

const Home = () => {
  return (
    <>
      <Navbar />
      <br /> 
    <div className="flex flex-col items-center w-full bg-gray-100">
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
      {/* Sección con imágenes */}
      <div className="w-[90%] max-w-6xl flex flex-col md:flex-row gap-4 mb8">
        {/* Imagen grande a la izquierda */}
        <div className="md:w-1/2 w-full">
          <img
            src={imgOferta}
            alt="Left"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Dos imágenes a la derecha */}
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <img
            src={lentesPersonalizados}
            alt="Top right"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
          <img
            src={lentesImportados}
            alt="Bottom right"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
    <br />
    <Footer/>
    </>
  );
};

export default Home;