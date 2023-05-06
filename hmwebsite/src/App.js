import Navbar from './components/Navbar';
import Concimientos from './pages/Conocimientos';
import Home from './pages/Home';
import Sobremi from './pages/Sobremi';
import Todoapp from './pages/Todoapp';
import Contacto from './pages/Contacto';
import {Route, Routes} from "react-router-dom"
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  
  return( 
  <>
  <Navbar/>
  <Routes>
    <Route path="/PrtflPGG/" element={<Home/>}/>
    <Route path="PrtflPGG/personal" element={<Sobremi/>}/>
    <Route path="PrtflPGG/informacion" element={<Concimientos/>}/>
    <Route path="PrtflPGG/Todoapp" element={<Todoapp/>}/>
    <Route path="PrtflPGG/contacto" element={<Contacto/>}/>
  </Routes>
  <footer className='fter'><div className='footertext'>Diseñado por Pablo García González</div></footer>
  </>
  )
}


export default App;
