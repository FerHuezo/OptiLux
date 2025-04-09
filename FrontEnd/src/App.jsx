
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import LogIn from './pages/LogIn'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Login" element={<LogIn />}/>
      </Routes>
    </Router>
  );
};

export default App
