import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/Ofertas" element={<h1>Ofertas</h1>} />
        <Route path="/Productos" element={<h1>Productos</h1>} />
        <Route path="/Marcas" element={<h1>Marcas</h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
