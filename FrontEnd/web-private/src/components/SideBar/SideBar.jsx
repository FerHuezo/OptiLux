import { useAuth } from '../../context/AuthContext';
import { useNavigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import './sidebar.css';
import logo from '../../assets/logo-transparent-white.svg';
import { Boxes, ClipboardList, Home, LogOut, Users } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout, authCokie } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!authCokie) return null;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sidebar flex flex-col h-screen bg-blue-900 text-white p-4 shadow-lg border-r border-gray-300"
    >
      <div className="logo-container flex justify-center">
        <img src={logo} alt="OptiLux Logo" className="w-32 h-32" />
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/Home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <span className="flex items-center gap-2">
            <Home size={18} /> Inicio
          </span>
        </NavLink>
        <NavLink to="/Productos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <span className="flex items-center gap-2">
            <Boxes size={18} /> Productos
          </span>
        </NavLink>
        <NavLink to="/Pedidos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <span className="flex items-center gap-2">
            <ClipboardList size={18} /> Pedidos
          </span>
        </NavLink>
        <NavLink to="/Empleados" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <span className="flex items-center gap-2">
            <Users size={18} /> Empleados
          </span>
        </NavLink>
      </nav>

      {/* Cerrar sesión alineado abajo */}
      <div className="mt-auto flex">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-4 transition-all"
          onClick={handleLogout}
        >
          <LogOut size={18} /> Cerrar Sesión
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;