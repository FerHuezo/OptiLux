import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Contactanos from './pages/Contactanos/contactanos'
import Politica from './Pages/Politica/politica'
import Pimportados from './Pages/Productos/pImportados';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ofertas" element={<h1>Ofertas</h1>} />
          <Route path="/productos" element={<Pimportados />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/Politica" element={<Politica />} />
        </Routes>
      </Router>



    </>



  );
};

export default App
