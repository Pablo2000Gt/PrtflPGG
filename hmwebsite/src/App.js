import Navbar from './components/Navbar';
import Concimientos from './pages/Conocimientos';
import Home from './pages/Home';
import Sobremi from './pages/Sobremi';
import Todoapp from './pages/Todoapp';
import Contacto from './pages/Contacto';
import {Route, Routes} from "react-router-dom"

function App() {
  
  return( 
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/personal" element={<Sobremi/>}/>
    <Route path="/informacion" element={<Concimientos/>}/>
    <Route path="/Todoapp" element={<Todoapp/>}/>
    <Route path="/contacto" element={<Contacto/>}/>
  </Routes>
  <footer className='fter'><div className='footertext'>Diseñado por Pablo García González</div></footer>
  </>
  )
}

export default App;
