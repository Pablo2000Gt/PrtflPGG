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
            <p>Estudiante de Ingeniería en y Sistemas, entusiasta de la astronomía.
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
                <ul className="dataUl">
                    <li>
                        Impresión 3D
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
                        Atleta alto rendimiento, 2017-2022
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
                Herramientas
            </Button>
            <Collapse in={abrir}>
                <div id="collapse-int">
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
                        Docker
                    </li> 
                    <li>
                        ReactJS, VueJS
                    </li>
                    <li>
                        ExpressJS
                    </li>
                    <li>
                        MongoDB, Postgres
                    </li>
                    <li>
                        Java, Python, C++, Golang, Typescript
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
                        InnApp: FullStack Developer: NodeJS - ReactJS - SCRUM
                    </li>
                    <li>
                        Tigo: Apprentice, NodeJS - VueJS - SCRUM
                    </li>
                </ul>
                </div>
            </Collapse>
            

        </div>

    </div>
    );
}
