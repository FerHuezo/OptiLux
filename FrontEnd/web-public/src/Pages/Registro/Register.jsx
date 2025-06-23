import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FiEye, FiEyeOff } from "react-icons/fi";
import fondo from "../../assets/fondo.png";
import toast from "react-hot-toast";
import VerifyCodeModal from "../../components/verifyCodeModal/verifyCodeModal";
import "./Register.css";

function Registro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegresar = () => {
    navigate("/");
  };

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/api/registerClients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // para guardar cookie con token
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Error en el registro");
        return;
      }

      toast.success("Registro exitoso. Revisa tu correo 📩");
      setShowModal(true); // abrir modal de verificación
    } catch (error) {
      toast.error("Error de red o del servidor");
    }
  };

  return (
    <div className="registro-container">
      <button className="btn-regresar-global" onClick={handleRegresar}>
        <IoArrowBack className="icono-regresar" /> Regresar al inicio
      </button>

      <div className="registro-card">
        <div className="registro-left">
          <img src={fondo} alt="OptiLux" className="registro-img" />
          <div className="registro-blur" />
          <div className="registro-overlay">
            <h1>¡Vamos a comenzar!</h1>
          </div>
        </div>

        <div className="registro-right">
          <h2>Crea tu cuenta</h2>
          <form className="registro-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="registro-nombres">
              <input
                type="text"
                placeholder="Primer Nombre"
                {...register("firstName", { required: true })}
              />
              <input
                type="text"
                placeholder="Primer Apellido"
                {...register("lastName", { required: true })}
              />
            </div>

            <input
              type="text"
              placeholder="Teléfono"
              {...register("telephone", { required: true })}
            />

            <input
              type="text"
              placeholder="DUI"
              {...register("dui", { required: true })}
            />

            <input
              type="email"
              placeholder="Correo Electrónico"
              {...register("email", { required: true })}
            />

            <div className="registro-password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password", { required: true })}
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
              <input type="checkbox" id="terminos" {...register("terms", { required: true })} />
              <label htmlFor="terminos">
                Estoy de acuerdo con los <a href="/Terminos">Términos y Condiciones</a>
              </label>
            </div>

            <button type="submit" className="btn-crear">Crear Cuenta</button>
          </form>
        <br />
          <p className="registro-login">
            ¿Ya tienes una cuenta? <a href="/InicioSesion">Inicia Sesión</a>
          </p>
        </div>
      </div>

      <VerifyCodeModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Registro;
