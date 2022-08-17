import { Link,useMatch,useResolvedPath } from "react-router-dom";

export default function Navbar(){
    
    return <nav className="nav">
        <Link to="/PrtflPGG/" className="site-title">Portafolio</Link>
        <ul>
            <CstmLink to="/PrtflPGG/personal">Sobre mi</CstmLink>
            <CstmLink to="/PrtflPGG/todoapp">ToDo App</CstmLink>
            <CstmLink to="/PrtflPGG/contacto">Contacto</CstmLink>
        </ul>
    </nav>
}
function CstmLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to);
    const sActive = useMatch({path: resolvedPath.pathname, end: true})
    
     return(
        <li className={sActive ? "active": ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
     )
}