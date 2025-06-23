// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { IoArrowBack, IoEyeOff, IoEye } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import fondoLogin from '../../assets/fondo2.png'; 
import logoOptiLux from '../../assets/logo-transparent-white.svg'; 
import useAuth from '../../context/useAuth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoBack = () => {
    navigate('/'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Completa todos los campos"); // o usa toast
    }

    await login({ email, password });
  };

  return (
    <div className="login-container">
      <button className="btn-regresar-global" onClick={handleGoBack}>
        <IoArrowBack className="icono-regresar" /> Regresar al inicio
      </button>

      <div className="login-card">
        <div className="login-left">
          <h1>Inicia Sesión</h1>
          <p className="subtitulo">Por favor ingresa tus datos personales para iniciar sesión</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Contraseña</label>
            <div className="input-password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
      <hr />
            <p className="login-registrarse">
              ¿No tienes una cuenta? <a href="/Register">Regístrate ya</a>
            </p>

          </form>
        </div>

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