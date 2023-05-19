import Concimientos from './pages/Conocimientos';
import Home from './pages/Home';
import Sobremi from './pages/Sobremi';
import Todoapp from './pages/Todoapp';
import Contacto from './pages/Contacto';
import {Route, Routes} from "react-router-dom"
import tslogo from "./media/tslogo.png"
import { Link,useMatch,useResolvedPath } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  
  return( 
  <>
  {/* <Navbar/> */}
  <div className='divlogo'>
    <CstmLink to="/PrtflPGG/">
      <img id="logo" src={tslogo}/>
    </CstmLink>
  </div>

  <Routes>
    <Route path="/PrtflPGG/" element={<Home/>}/>
    <Route path="PrtflPGG/personal" element={<Sobremi/>}/>
    <Route path="PrtflPGG/informacion" element={<Concimientos/>}/>
    <Route path="PrtflPGG/Todoapp" element={<Todoapp/>}/>
    <Route path="PrtflPGG/contacto" element={<Contacto/>}/>
  </Routes>
  </>
  )
}
function CstmLink({to,children,...props}){
  const resolvedPath = useResolvedPath(to);
  
   return(
      <Link to={to}{...props}>{children}</Link>
   )
}


export default App;
