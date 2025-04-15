import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    topbar: {
      backgroundColor: '#8ca9ad',
      color: 'white',
      padding: '5px 20px',
      fontSize: '14px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    topbarLinks: {
      color: 'white',
      marginLeft: '15px',
      textDecoration: 'none',
    },
    navbar: {
      backgroundColor: '#d6e1e2',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    navbarLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
    },
    logo: {
      height: '40px',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 500,
    },
    activeLink: {
      textDecoration: 'underline',
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: '#333',
    },
    navbarRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    button: {
      backgroundColor: '#8ca9ad',
      color: 'white',
      border: 'none',
      padding: '8px 15px',
      borderRadius: '20px',
      cursor: 'pointer',
    },
    cart: {
      border: '1px solid #8ca9ad',
      padding: '8px 15px',
      borderRadius: '20px',
      color: '#8ca9ad',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      {/* Topbar */}
      <div style={styles.topbar}>
        <div>OptiLux ® | El Salvador | 2025</div>
        <div>
          <a href="/MiPerfil" style={styles.topbarLinks}>Mi Perfil</a>
          <a href="/SobreNosotros" style={styles.topbarLinks}>Sobre Nosotros</a>
          <a href="/PoliticaPrivacidad" style={styles.topbarLinks}>Política y Privacidad</a>
        </div>
      </div>

      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <img
            src="/assets/logo-transparent-white.svg"
            alt="Logo OptiLux"
            style={styles.logo}
          />
          <div style={styles.navLinks}>
            <NavLink
              to="/"
              end
              style={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/ofertas"
              style={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Ofertas
            </NavLink>
            <NavLink
              to="/productos"
              style={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Productos
            </NavLink>
            <NavLink
              to="/marcas"
              style={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Marcas
            </NavLink>
          </div>
        </div>

        <div style={styles.navbarRight}>
          <button style={styles.button}>Contáctanos</button>
          <button style={styles.cart}>Ver carrito de compras</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;