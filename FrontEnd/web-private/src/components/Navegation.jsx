import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Pedidos from "../pages/Pedidos";
import Venta from "../pages/Venta";
import Home from "../pages/Menu/menu";
import ProductoFiltro from "../pages/prodcutoFiltros/productoFiltro";
import ProductoAros from "../pages/productoAros/productoAros";
import ProductosImportados from "../pages/productosImportados/productosImportados";
import ProductoAumento from "../pages/productoAumento/productoAumento";
import ProductoTerminales from "../pages/productoTerminales/productoTerminales";
import Login from "../pages/LogIn/Login";

import { PrivateRoute } from "../components/privateRoute";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/SideBar/SideBar";

const AppRoutes = () => {
  const { authCokie } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authCokie) {
      navigate("/Productos");
    }
  }, [authCokie]);

  return (
  <>
    {authCokie && <Sidebar />}

    <div className={`flex ${authCokie ? "ml-64" : ""} w-full min-h-screen`}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        {!authCokie && <Route path="/login" element={<Login />} />}
        
        <Route element={<PrivateRoute />}>
          <Route path="/Productos" element={<ProductosImportados />} />
          <Route path="/Productos/Filtros" element={<ProductoFiltro />} />
          <Route path="/Productos/Aros" element={<ProductoAros />} />
          <Route path="/Productos/Aumento" element={<ProductoAumento />} />
          <Route path="/Productos/Terminales" element={<ProductoTerminales />} />
          <Route path="/Pedidos" element={<div className="flex-grow"><Pedidos /></div>} />
          <Route path="/Pedidos/:id" element={<Venta />} />  
          <Route path="/Home" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  </>
);
};

export default AppRoutes;
