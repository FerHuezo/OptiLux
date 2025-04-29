import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Inicio/Home'
import Register from './pages/Registro/Register'
import Contactanos from './pages/Contactanos/contactanos'
import Politica from './Pages/Politica/politica'
import Pimportados from './Pages/Productos/pImportados';
import SobreNosotros from './Pages/Sobre Nosotros/sobreNosotros'
import Carrito from './Pages/Carrito/carrito';
import Login from './Pages/Login/Login'
import Categorias from './Pages/Categoria/Categoria'
import Ofertas from './Pages/Ofertas/Ofertas'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Productos/Importados" element={<Pimportados/>} />
        <Route path="/Productos/Personalizados" element={<h1>Personalizados</h1>} />
        <Route path="/InicioSesion" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Contactanos" element={<Contactanos />}/>
        <Route path="/Politica" element={<Politica/>}/>
        <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
        <Route path="/Carrito" element={<Carrito/>} />        
        <Route path="/Productos" element={<Categorias/>} />
        <Route path="/Ofertas" element={<Ofertas/>} />
      </Routes>
    </Router>
    </>



  );
};

export default App
