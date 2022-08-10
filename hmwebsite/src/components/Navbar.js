import { Link,useMatch,useResolvedPath } from "react-router-dom";

export default function Navbar(){
    
    return <nav className="nav">
        <Link to="/" className="site-title">Pablo</Link>
        <ul>
            <CstmLink to="/personal">Sobre mi</CstmLink>
            <CstmLink to="/informacion">Conocimientos</CstmLink>
            <CstmLink to="/todoapp">ToDo App</CstmLink>
            <CstmLink to="/contacto">Contacto</CstmLink>
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