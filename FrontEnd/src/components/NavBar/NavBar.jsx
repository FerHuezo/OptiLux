import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo-transparent-white.svg';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Definir si estamos en las páginas de Contactanos o Carrito
  const isContactPage = location.pathname === "/Contactanos";
  const isCartPage = location.pathname === "/Carrito";

  return (
    <div className="navbar-container">
      {/* Topbar */}
      <div className="topbar">
        <div>OptiLux ® | El Salvador | 2025</div>
        <div className="topbar-links">
          <NavLink to="/Perfil">Mi Perfil</NavLink>
          <NavLink to="/sobreNosotros">Sobre Nosotros</NavLink>
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

        {/* Enlaces centrales */}
        <div className="navbar-links">
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
            onClick={() => navigate('/Carrito')}
          >
            <FaShoppingCart /> Carrito de Compras
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;