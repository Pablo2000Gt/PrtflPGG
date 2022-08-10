import wpp from "../media/wpplogo.png";
import email from "../media/emaillogo.png";
import ln from "../media/inlogo.png";

export default function Contacto(){
    return (
        
    <div className="info">
        <h1>Ponte en contacto conmigo:</h1>
        <ul>
            <li>
                <img className="logo" src={wpp} alt="Whatsapp Logo"/>
                <a href="https://wa.me/50237442841">+502 3744-2841</a>
            </li>
            <li>
                <img className="logo" src={email} alt="Email Logo"/>
                garciagonpablo@gmail.com
            </li>
            <li>
            <img className="logo" src={ln} alt="Linkedin Logo"/>
                <a href="https://www.linkedin.com/in/garciagonpablo">Pablo García Gonzalez</a>

            </li>
        </ul>
    </div>)
}
