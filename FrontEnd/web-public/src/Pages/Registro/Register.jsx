import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // <-- Nuevo
import fondo from '../../assets/fondo.png';

function Registro() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegresar = () => {
    navigate('/');
  };

  return (
    <div className="registro-container">
      <button className="btn-regresar-global" onClick={handleRegresar}> 
      <IoArrowBack className="icono-regresar" /> Regresar al inicio
      </button>
      <div className="registro-card">
        <div className="registro-left">
          <img src={fondo} alt="OptiLux" className="registro-img" />
          <div className="registro-blur">       
          </div>
          <div className="registro-overlay">
            <h1>¡Vamos a comenzar!</h1>
          </div>
        </div>

        <div className="registro-right">
          <h2>Crea tu cuenta</h2>
          <form className="registro-form">
            <div className="registro-nombres">
              <input type="text" placeholder="Primer Nombre" />
              <input type="text" placeholder="Primer Apellido" />
            </div>
            <input type="email" placeholder="Correo Electrónico" />
            
            {/* Input de contraseña con iconos interactivos */}
            <div className="registro-password-container">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Contraseña" 
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="toggle-password-btn"
              >
              {showPassword ? <FiEyeOff /> : <FiEye />}
</button>
            </div>

            <div className="registro-checkbox">
              <input type="checkbox" id="terminos" />
              <label htmlFor="terminos">
                Estoy de acuerdo con los <a href="/Terminos">Términos y Condiciones</a>
              </label>
            </div>
            <button type="submit" className="btn-crear">Crear Cuenta</button>
          </form>
          <div className="registro-divider">
            <hr /> <span>o</span> <hr />
          </div>
          <button className="btn-google"> <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" /> Iniciar con Google</button>
          <p className="registro-login">
            ¿Ya tienes una cuenta? <a href="/InicioSesion">Inicia Sesión</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
