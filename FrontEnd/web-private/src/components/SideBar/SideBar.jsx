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
      initial={{ x: -120, opacity: 0, scale: 0.9 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="sidebar flex flex-col h-screen bg-blue-900 text-white p-4 shadow-lg border-r border-gray-300 justify-between items-center"
    >
      {/* Logo centrado con animación */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="logo-container flex justify-center mt-10"
      >
        <img src={logo} alt="OptiLux Logo" className="w-48 h-48" />
      </motion.div>

      {/* Menú con animación stagger */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="flex flex-col gap-4"
      >
        {[
          { to: "/Home", icon: <Home size={18} />, label: "Inicio" },
          { to: "/Productos", icon: <Boxes size={18} />, label: "Productos" },
          { to: "/Pedidos", icon: <ClipboardList size={18} />, label: "Pedidos" },
          { to: "/Empleados", icon: <Users size={18} />, label: "Empleados" }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
          >
            <NavLink to={item.to} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <span className="flex items-center gap-2">
                {item.icon} {item.label}
              </span>
            </NavLink>
          </motion.div>
        ))}
      </motion.nav>

      {/* Cerrar sesión con animación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-full flex justify-center mt-auto mb-10"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all text-sm"
          onClick={handleLogout}
        >
          <LogOut size={30} /> Cerrar Sesión
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;