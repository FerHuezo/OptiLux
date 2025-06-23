import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Ventas from "../../assets/ventas.png"
import GraficaPedidos from "../../components/Stats/Grafico";
import Sidebar from "../../components/SideBar/SideBar";
import GestionOptilux from "../../assets/OptiluxApp.png"
import { useNavigate } from "react-router";


const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
        <Sidebar />
        <div class="bg-white">
        <div class="mx-auto max-w-[1600px] py-24 sm:px-6 sm:py-32 lg:px-8 ml-70 ">
        <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-32 pb-32 min-h-[700px] shadow-2xl sm:rounded-3xl sm:px-16 md:pt-40 md:pb-40 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

    <svg viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="100%" stopColor="#8CA9AD" />
    </radialGradient>
  </defs>
  <circle cx="512" cy="512" r="512" fill="url(#myGradient)" fillOpacity="1" />
</svg>
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">¡Bienvenido a OptiLux!</h2>
        <p class="mt-6 text-lg/8 text-pretty text-gray-300">Inicia tu recorrido como uno mas del equipo, donde podras manejar el inventario de nuestra compañia</p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" onClick={navigate("/Productos")}> Gestionar </a>
        </div>
      </div>
      <div class="relative mt-16 h-80 lg:mt-8">
        <img class="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src={GestionOptilux} alt="App screenshot" width="1824" height="1080" />
      </div>
    </div>
  </div>
</div>
 

    </>
  );
};

export default Menu;