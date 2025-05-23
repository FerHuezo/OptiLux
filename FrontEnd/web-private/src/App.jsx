import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PedidosActivos from './pages/Pedidos/Pedidos';
import ProductoFiltro from './pages/prodcutoFiltros/productoFiltro';
import ProductoAros from './pages/productoAros/productoAros';
import ProductosImportados from './pages/productosImportados/productosImportados'
import ProductoAumento from './pages/productoAumento/productoAumento'
import ProductoTerminales from './pages/productoTerminales/productoTerminales'
import DetallePedido from './pages/DetallePedido/DetallePedido';
import Sidebar from './components/SideBar/SideBar';

import { PrivateRoute } from './components/privateRoute';
import { useAuth } from './context/AuthContext';
import { use } from 'react';

const App = () => {

  const { authCokie } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authCokie) {
      navigate("/Productos");
    }
  }, [authCokie]);

  return (
    <>
    <Router>
      <Routes>

        {!authCokie ? <Route path="/login" element={<Login />} /> :null}

        <Route element = {<PrivateRoute/>}>
        <Route path="/Productos" element={<ProductosImportados/>}/>
        <Route path="/Productos/Filtros" element={<ProductoFiltro/>}/>
        <Route path="/Productos/Aros" element={<ProductoAros/>}/>
        <Route path="/Productos/Aumento" element={<ProductoAumento/>}/>
        <Route path="/Productos/Terminales" element={<ProductoTerminales/>}/>
        <Route path="/Pedidos" element={<PedidosActivos/>}/>
        <Route path="/Pedidos/1" element={<DetallePedido/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
};
export default App