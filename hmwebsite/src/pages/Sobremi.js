import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import portrait from '../media/portrait.JPG'

export default function Sobremi(){
    const [open,setOpen] = useState(false);
    const [abrir,setAbrir] = useState(false);
    const [sesamo,setSesamo] = useState(false);

    return (
    <div className="todo">
        <div className="principal">
            <div className="PPORTRAIT">
                <img className="portrait" src={portrait} alt="Portrait"/>
                <h1><b>Pablo García González 🇬🇹</b></h1>
            </div>
            
            <hr width="100%" color="#02253d" size="1px" />
            <p>Estudiante de Ingeniería en Ciencias y Sistemas, entusiasta
                de las nuevas tecnologías y Seleccionado Nacional de Polo
                Acuático.
            </p>
        </div>

        <div className="data">
            
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-hab"
                aria-expanded={open}
                id="habilidades"
            >
                Habilidades
            </Button>
            <Collapse in={open}>
                <div id="collapse-hab">
                <ul >
                    <li>
                        ReactJS
                    </li>
                    <li>
                       Inglés Avanzado
                    </li>
                    <li>
                        Dialogo Asertivo
                    </li>
                    <li>
                        Pensamiento Creativo
                    </li>
                    <li>
                        Java, Python, C++, Golang
                    </li>
                </ul>
                </div>
            </Collapse>
            <br></br>
            <Button
                onClick={() => setAbrir(!abrir)}
                aria-controls="collapse-int"
                aria-expanded={abrir}
                id="intereses"
            >
                Intereses
            </Button>
            <Collapse in={abrir}>
                <div id="collapse-int">
                <ul >
                    <li>
                        Blockchain
                    </li>
                    <li>
                       Astronomía
                    </li>
                    <li>
                        Cripto-tecnologías
                    </li>
                    <li>
                        Seguridad Informatica
                    </li> 
                </ul>
                </div>
            </Collapse>
            <br></br>
            <Button
                onClick={() => setSesamo(!sesamo)}
                aria-controls="collapse-exp"
                aria-expanded={sesamo}
                id="experiencia"
            >
                Experiencia
            </Button>
            <Collapse in={sesamo}>
                <div id="collapse-exp">
                <ul >
                    <li>
                        Git
                    </li>
                    <li>
                        Linux
                    </li>
                    <li>
                       Windows
                    </li>
                    
                    <li>
                        Impresión 3D
                    </li>
                    <li>
                        RestAPI: Flask (Python), RESTful (Golang)
                    </li>
                </ul>
                </div>
            </Collapse>
            

        </div>

    </div>
    );
}
