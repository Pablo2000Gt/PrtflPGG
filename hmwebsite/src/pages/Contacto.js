import wpp from "../media/wpplogo.png";
import ln from "../media/inlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";

export default function Contacto(){

    const [mobile, setMobile] = useState(false);
    const [tab, setTab] = useState(false);
    
    const handleWindowSizeChange = () => {
        if(window.innerWidth<=975){
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
        
    <div className="info" style={tab?{paddingTop:"30%"}:{paddingTop:"10%"}}>
        <h1><b>Contáctame:</b></h1>
        <ul>
            <li>
                <img className="logo" src={wpp} alt="Whatsapp Logo" style={{width:"70px",marginRight:"1rem"}} />
                <a href="https://wa.me/50237442841">+502 3744-2841</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"5rem",marginRight:"1rem"}}></FontAwesomeIcon>
                garciagonpablo@gmail.com
            </li>
            <li>
            <img className="logo" src={ln} alt="Linkedin Logo" style={{width:"70px",marginRight:"1rem"}} />
                <a href="https://www.linkedin.com/in/garciagonpablo">Pablo García Gonzalez</a>

            </li>
        </ul>
    </div>)
}
