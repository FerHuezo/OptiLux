// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { IoArrowBack, IoEyeOff, IoEye } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import fondoLogin from '../../assets/fondo2.png'; 
import logoOptiLux from '../../assets/logo-transparent-white.svg'; 

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="login-container">
      {/* Botón regresar */}
      <button className="btn-regresar-global" onClick={handleGoBack}>
        <IoArrowBack className="icono-regresar" /> Regresar al inicio
      </button>

      <div className="login-card">
        {/* Izquierda: Formulario */}
        <div className="login-left">
          <h1>Inicia Sesión</h1>
          <p className="subtitulo">Por favor ingresa tus datos personales para iniciar sesión</p>

          <form className="login-form">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="Correo Electrónico" />

            <label>Contraseña</label>
            <div className="input-password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>

            <div className="login-options">
              <div>
                <input type="checkbox" id="recordar" />
                <label htmlFor="recordar">Mantenerme conectado</label>
              </div>
              <a href="/Recuperar">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="btn-login">Iniciar Sesión</button>

            <p className="login-registrarse">
              ¿No tienes una cuenta? <a href="/Register">Regístrate ya</a>
            </p>

            <div className="login-divider">
              <hr /> <span>o</span> <hr />
            </div>

            <button className="btn-google">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
              Iniciar con Google
            </button>
          </form>
        </div>

        {/* Derecha: Imagen con blur y overlay */}
        <div className="login-right">
          <img src={fondoLogin} alt="OptiLux Login" className="login-img" />
          <div className="login-overlay">
            <img src={logoOptiLux} alt="OptiLux Logo" className="logo-optilux" />
            <h2>Bienvenido<br />de nuevo!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
