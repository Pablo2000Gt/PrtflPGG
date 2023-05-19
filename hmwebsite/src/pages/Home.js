import CV from "../media/CV-ES.pdf"
import RESUME from "../media/CV-IN.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"; 
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import blackYoshi from "../media/blackYoshi.png"
import { Link,useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import marcaPais from "../media/marcaPais.png";
import balanz from "../media/balanz.png";



export default function Home(){

    const [mobile, setMobile] = useState(false);
    const [tab, setTab] = useState(false);
    
    const handleWindowSizeChange = () => {
        if(window.innerWidth >=721 && window.innerWidth<=975){
            setTab(true);
        }else setTab(false);

        if(window.innerWidth >= 1350) {
            setMobile(true);
        } else setMobile(false);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
    <div className="home">
        <div className="box1" style={tab?{paddingTop:"10%"}:{}}>
            {mobile?<img id="avatar"src={blackYoshi} alt=""/>:null}
            <div className="homeHeader">
                <h1>¡Hola, soy <b>Pablo</b>!</h1>
                <h2>Junior Full Stack Developer</h2>
                <h3 id="paragraph">
                    Aplicación desarrollada por mi en ReactJS con Redux. Adaptada para visualizarse en diferentes dispositivos. Diseñada por <a href="https://www.linkedin.com/in/holajimena/" style={{color:"white"}}>Jimena García</a>. <br></br><br></br>
                    <b style={{fontSize:"1.5rem"}}>Proyectos en los que he tenido participación:</b>
                </h3>
            </div>
            <div className="sites">
                <a href="https://conoce.culturaguate.com/home" ><img id="plogo1" src={marcaPais}></img>
                
                </a>
                <a href="http://ec2-52-207-219-10.compute-1.amazonaws.com/" ><img id="plogo2" src={balanz}></img></a>
            <hr style={{width:"100%"}} />
            </div>
            <div className="botones">
                <a href={CV} download={CV}><button className="getbtn1">Descargar CV</button></a>
                <a href={RESUME} download={RESUME}><button className="getbtn2">Download Resume</button></a>
            </div>

            <div className="iconos">
                <button className="iconbtn">
                    <CstmLink to="/PrtflPGG/personal">
                        <FontAwesomeIcon className="icon" icon={faCircleUser} style={{color: "#ffffff",}} />               
                    </CstmLink>
                </button>
                {/* <button className="iconbtn">
                    <FontAwesomeIcon className="icon" icon={faStar} style={{color: "#ffffff",}} />
                </button> */}
                <button className="iconbtn">
                    <CstmLink to="/PrtflPGG/todoapp">
                        <FontAwesomeIcon className="icon" icon={faListAlt} style={{color: "#ffffff",}} />
                    </CstmLink>
                </button>
                <button className="iconbtn">
                    <CstmLink to="/PrtflPGG/contacto">
                        <FontAwesomeIcon className="icon" icon={faCircleInfo} style={{color: "#ffffff",}} />
                    </CstmLink>
                </button>
            </div>
        </div>

    </div>
    );
    
}
function CstmLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to);
    
     return(
        <Link to={to}{...props}>{children}</Link>
     )
}
