import { useAuth } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import {Toaster, toast} from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import imageLogo from "../assets/logo-transparent-white.svg";
import "../pages/Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, Login, logout, authCokie, setAuthCokie } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
 
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor, complete todos los campos.");
      return;
    }
    const result = await Login(email, password);
    console.log("Resultado del login:", result);
    if (!result.success) {
      toast.error(result.message || "Credenciales incorrectas.");
      return;
    }


    toast.success("Inicio de sesión exitoso.");
    setIsLoggedIn(true);
    

    
  };
/*
useEffect(() => {
  console.log("Entrando a useEffect del Login...");
  console.log("authCokie:", authCokie);
  console.log("isLoggedIn:", isLoggedIn);

  if (authCokie && isLoggedIn) {
    console.log("Redirigiendo a productos...");
    navigate("/Productos");
  }
}, [authCokie, isLoggedIn]);*/

  return (
    <div className="login-container">
      <div className="image-side">
        
      </div>
      <div className="form-side">
        <div className="logo">
          <img src={imageLogo} alt="OptiLux Logo" />
        </div>
        <h1>Inicia Sesión</h1>
        <div className="input-group">
          <FaUser className="icon" />
          <input type="email" placeholder="Correo Electrónico" required value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input type="password" placeholder="Contraseña" required value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Ingresar</button>
      </div>
    </div>
  );
};

export default Login;