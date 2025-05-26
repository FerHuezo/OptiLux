import { useAuth } from '../../context/AuthContext';
import './sidebar.css';
import logo from '../../assets/logo-transparent-white.svg';
import { useNavigate, NavLink } from "react-router-dom";


// Íconos
import { Boxes, ClipboardList, Home, LogOut } from 'lucide-react';


const Sidebar = () => {

  const navigate = useNavigate();
  const {logout, authCokie} = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  if(!authCokie) return null; 


  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="OptiLux Logo" className="logo" />
      </div>

      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Home size={18} /> Inicio
          </span>
        </NavLink>
        <NavLink to="/Productos" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Boxes size={18} /> Productos
          </span>
        </NavLink>
        <NavLink to="/Pedidos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ClipboardList size={18} /> Pedidos
          </span>
        </NavLink>
      </nav>

      {/* Cerrar sesión al fondo */}
      <div className="logout-container">
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleLogout} 
          >
            Cerrar Sesión
          </button>
      </div>
    </div>
  );
};

export default Sidebar;
