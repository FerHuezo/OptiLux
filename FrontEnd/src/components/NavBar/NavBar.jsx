import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const styles = {
    topbar: {
      backgroundColor: '#8CA9AD',
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
      position: 'absolute',
      left: '40%',
      textAlign: 'center',
      gap: '20px',
      color: 'white',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 500,
    },
    activeLink: {
      textDecoration: 'underline',
      color: 'white',
      fontWeight: 'bold',
    },
    navbarRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    button: {
      backgroundColor: '#8CA9AD',
      color: 'white',
      border: 'none',
      padding: '8px 15px',
      borderRadius: '20px',
      cursor: 'pointer',
    },
    cart: {
      border: '1px solid #8CA9AD',
      padding: '8px 15px',
      borderRadius: '20px',
      color: '#8CA9AD',
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
          <a href="/Perfil" style={styles.topbarLinks}>Mi Perfil</a>
          <a href="/SobreNosotros" style={styles.topbarLinks}>Sobre Nosotros</a>
          <a href="/PoliticaPrivacidad" style={styles.topbarLinks}>Política y Privacidad</a>
        </div>
      </div>

      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <img
            src="/assets/react.svg"
            alt="Logo OptiLux"
            style={styles.logo}
          />
          <div style={styles.navLinks}>
            <a
              href="/Inicio"
              style={activeLink === 'Inicio' ? styles.activeLink : styles.link}
              onClick={() => handleLinkClick('Inicio')}
            >
              Inicio
            </a>
            <a
              href="/Ofertas"
              style={activeLink === 'Ofertas' ? styles.activeLink : styles.link}
              onClick={() => handleLinkClick('Ofertas')}
            >
              Ofertas
            </a>
            <a
              href="/Productos"
              style={activeLink === 'Productos' ? styles.activeLink : styles.link}
              onClick={() => handleLinkClick('Productos')}
            >
              Productos
            </a>
            <a
              href="/Marcas"
              style={activeLink === 'Marcas' ? styles.activeLink : styles.link}
              onClick={() => handleLinkClick('Marcas')}
            >
              Marcas
            </a>
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
