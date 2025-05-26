import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Navegation from './components/Navegation';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (      
  <Router>
    <AuthProvider>
      <Navegation />
    </AuthProvider>
  </Router>
  );
}

export default App