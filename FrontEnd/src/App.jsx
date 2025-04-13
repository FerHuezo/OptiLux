import './App.css'
import Footer from './components/footer/footer'
import {BrowserRouter as Router, Routes, Route} from "react-router"; 
import Contactanos from './Pages/contactanos';
import Nav from './components/navExample/Nav';

function App() {
  return (
    <>
        <Router>
          <Nav />
        <Routes>
            <Route path='/contactanos' element = {<Contactanos/>}/>
            <Route />
            <Route />
        </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
