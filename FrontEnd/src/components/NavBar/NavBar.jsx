import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaShoppingCart, FaBars } from 'react-icons/fa';
import logo from '../../assets/logo-transparent-white.svg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir y cerrar el menú
  const navigate = useNavigate();
  const location = useLocation();

  // Definir si estamos en las páginas de Contactanos o Carrito
  const isContactPage = location.pathname === "/Contactanos";
  const isCartPage = location.pathname === "/Carrito";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú
  };

  return (
    <div className="navbar-container">
      {/* Topbar */}
      <div className="topbar">
        <div>OptiLux ® | El Salvador | 2025</div>
        <div className="topbar-links">
          <NavLink to="/Register">Mi Perfil</NavLink>
          <NavLink to="/SobreNosotros">Sobre Nosotros</NavLink>
          <NavLink to="/Politica">Política y Privacidad</NavLink>
        </div>
      </div>

      {/* Barra principal */}
      <div className="navbar">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo OptiLux"
          className="navbar-logo"
          onClick={() => navigate('/')}
        />

        {/* Icono hamburguesa (visible en pantallas pequeñas) */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <FaBars className="navbar-toggle-icon" />
        </div>

        {/* Enlaces centrales */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }>
            Inicio
          </NavLink>
          <NavLink to="/ofertas" className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }>
            Ofertas
          </NavLink>
          <NavLink to="/productos" className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }>
            Productos
          </NavLink>
          <NavLink to="/marcas" className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }>
            Marcas
          </NavLink>
        </div>

        {/* Botones derecha */}
        <div className="navbar-buttons">
          <button
            className={`navbar-button ${isContactPage ? 'active-btn' : ''}`}
            onClick={() => navigate('/Contactanos')}
          >
            <FaPhoneAlt /> Contáctanos
          </button>
          <button
            className={`navbar-button ${isCartPage ? 'active-btn' : ''}`}
            onClick={() => navigate('/carrito')}
          >
            <FaShoppingCart /> Carrito de Compras
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
