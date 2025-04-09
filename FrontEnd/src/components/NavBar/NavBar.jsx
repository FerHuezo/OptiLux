import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

const Navbar = () => {
  const styles = {
    topbar: {
      backgroundColor: "#8CA9AD",
      color: "white",
      padding: "5px 20px",
      fontSize: "14px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    topbarLinks: {
      color: "white",
      marginLeft: "15px",
      textDecoration: "none",
    },
    navbar: {
      backgroundColor: "#d6e1e2",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    navbarLeft: {
      display: "flex",
      alignItems: "center",
      gap: "40px",
    },
    logo: {
      height: "40px",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontWeight: 500,
    },
    activeLink: {
      textDecoration: "underline",
      color: "white",
      fontWeight: "bold",
    },
    navbarRight: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    button: {
      backgroundColor: "#8CA9AD",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "20px",
      cursor: "pointer",
    },
    cart: {
      border: "1px solid #8CA9AD",
      padding: "8px 15px",
      borderRadius: "20px",
      color: "#8CA9AD",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
  };

  return (
    <div>
      {/* Topbar */}
      <div style={styles.topbar}>
        <div>OptiLux ® | El Salvador | 2025</div>
        <div>
          <NavLink to="/Perfil" style={styles.topbarLinks}>
            Mi Perfil
          </NavLink>
          <NavLink to="/SobreNosotros" style={styles.topbarLinks}>
            Sobre Nosotros
          </NavLink>
          <NavLink to="/PoliticaPrivacidad" style={styles.topbarLinks}>
            Política y Privacidad
          </NavLink>
        </div>
      </div>

      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <img src="/assets/react.svg" alt="Logo OptiLux" style={styles.logo} />
          <div style={styles.navLinks}>
            <NavLink
              to="/Inicio"
              style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/Ofertas"
              style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
              Ofertas
            </NavLink>
            <NavLink
              to="/Productos"
              style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
              Productos
            </NavLink>
            <NavLink
              to="/Marcas"
              style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
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
