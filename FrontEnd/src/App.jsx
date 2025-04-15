import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/Ofertas" element={<h1>Ofertas</h1>} />
        <Route path="/Productos" element={<h1>Productos</h1>} />
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Login" element={<LogIn />}/>
      </Routes>
    </Router>
    </>
  );
};

export default App
