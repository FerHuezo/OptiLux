import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Inicio/Home'
import Register from './pages/Registro/Register'
import Contactanos from './pages/Contactanos/contactanos'
import Politica from './Pages/Politica/politica'
import SobreNosotros from './Pages/Sobre Nosotros/sobreNosotros'
import Carrito from './Pages/Carrito/carrito';
import Login from './Pages/Login/Login'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ofertas" element={<h1>Ofertas</h1>} />
        <Route path="/Productos" element={<h1>Productos</h1>} />
        <Route path="/InicioSesion" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Contactanos" element={<Contactanos />}/>
        <Route path="/Politica" element={<Politica/>}/>
        <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
        <Route path="/Carrito" element={<Carrito/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App
