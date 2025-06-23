// src/hooks/useAuth.js
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const useAuth = () => {
  const navigate = useNavigate();

  const register = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/api/registerClients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Error en el registro");

      toast.success("Verifica tu correo");
      localStorage.setItem("verificationToken", result.token);
      navigate("/verificar-codigo");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Credenciales inválidas");

      toast.success("Sesión iniciada");
      localStorage.setItem("token", result.token);
      localStorage.setItem("userId", result.userId);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { register, login };
};

export default useAuth;
