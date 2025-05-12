import { NavLink } from 'react-router-dom';
import './sidebar.css';
import logo from '../../assets/logo-transparent-white.svg';

// Íconos
import { Boxes, ClipboardList, Home, LogOut } from 'lucide-react';

const Sidebar = () => {
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
      <div style={{ marginTop: '400px' }}>
        <NavLink to="/logout" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <LogOut size={18} />Cerrar sesión
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
